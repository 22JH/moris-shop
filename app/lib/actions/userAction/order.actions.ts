"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "../../mongoose";
import { authOptions } from "../../utils/authOptions";
import { type Session, getServerSession } from "next-auth";
import type { UserType } from "@/app/types/UserType";
import User from "../../models/user.model";
import Item from "../../models/item.model";
import "../../models/totalOrders.model"
import TotalOrders from "../../models/totalOrders.model";
import mongoose from "mongoose";
import { ShippingItemType } from "@/app/types/ItemType";

/** 유저의 주문 진행(결제하기) 상태의 리스트 */
export async function getOrderInProgressList(): Promise<UserType | undefined> {
  try {
    connectToDB();
    const userSession = await getServerSession(authOptions);
    /** next의 redirect는 내부적으로 Error를 일으키기 때문에
     *  try문에서 redirect가 일어나도 catch의 throw가 잡힌다. */
    if (!userSession) throw new Error("user not-found");

    const res = (await User.findOne({ email: userSession.user.email })
      .populate("orderInProgress", {
        thumbnails: 1,
        title: 1,
        price: 1,
        category: 1,
      })
      .lean()
      .exec()) as UserType;
    return res;
  } catch (err: any) {
    if (err.message === "user not-found") return redirect("/login");
    throw new Error(`주문 목록 가져오기 실패 : ${err}`);
  }
}

/** 무결성 체크를 위해 주문 목록 총 금액 리턴 */
export async function getOrderInProgressTotalPrice(userSession: Session) {
  try {
    const res = (await User.findOne({ email: userSession?.user.email })
      .populate("orderInProgress", {
        price: 1,
      })
      .lean()
      .exec()) as UserType;

    const totalPrice = res.orderInProgress?.reduce((price, item) => {
      return price + item.price;
    }, 0);

    return totalPrice;
  } catch (err) {
    alert("결제에 실패했습니다. 다시 시도해 주세요");
    return redirect("/order/fail");
  }
}

/** 결제 완료 후 아이템 상태 변경 및 결제 완료 colllection 추가 함수 */
export async function changeItemStatus(amount: string, orderName: string) {
  const session = await mongoose.startSession(); // 세션 시작
  session.startTransaction(); // 트랜잭션 시작
  try {
    const userSession = await getServerSession(authOptions);
    const userEmail = userSession?.user.email;
    if (!userEmail) throw new Error("사용자 세션이 유효하지 않습니다.");

    const user = (await User.findOne({ email: userEmail })
      .session(session)
      .lean()
      .exec()) as UserType;
    const { name, phone, email, postCode, address, addressDetail } = user;
    const itemIds = user.orderInProgress;

    const totalOrders = new TotalOrders({
      item: itemIds,
      orderName,
      amount,
      name,
      phone,
      email,
      postCode,
      address,
      addressDetail,
    });

    /**
     * create 메서드와 session을 쓰려면 첫번째 인자를 배열로 보내야함.
     * 이 때 인자들이 전달이 안되는 상황 발생(collections은 정상적으로 생성)
     * 따라서 mongoose 가 아닌 mongodb메서드로 생성하고 session을 인자로전달한다.
     */
    const prepareRes = await totalOrders.save({ session });

    await Promise.all([
      Item.updateMany(
        { _id: { $in: itemIds } },
        { $set: { soldOut: true } },
        { session }
      ),
      User.updateOne(
        { email: userEmail },
        {
          $set: { orderInProgress: [] },
          $pullAll: { wishList: itemIds },
          $push: { orderComplete: prepareRes._id },
        },
        { session }
      ),
    ]);

    await session.commitTransaction(); // 트랜잭션 커밋
  } catch (err) {
    await session.abortTransaction(); // 트랜잭션 롤백
    console.error(err);
    return redirect("/order/fail");
  } finally {
    session.endSession(); // 세션 종료
  }
}

export async function getOrderedItems() {
  try {
    await connectToDB()
    const userSession = await getServerSession(authOptions);
    const userEmail = userSession?.user.email;
    if (!userEmail) throw new Error("사용자 세션이 유효하지 않습니다.");

  const res = await User.findOne({ email: userEmail }).populate({
    path: 'orderComplete',
    populate: {
      path: 'item',
      model: 'Item' // 'Item'은 item 문서의 모델 이름입니다.
    }
  })
  .select('orderComplete') as UserType;
    return res.orderComplete
   } catch (err) {
    throw new Error(`유저 주문 목록 가져오기 실패 : ${err}`)
  }
}