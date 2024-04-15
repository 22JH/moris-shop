"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "../../mongoose";
import { authOptions } from "../../utils/authOptions";
import { getServerSession } from "next-auth";
import User from "../../models/user.model";
import type { UserType } from "@/app/types/UserType";
import Item from "../../models/item.model";
import PrepareShipping from "../../models/prepareShipping.model";
import { connect } from "http2";
import mongoose from "mongoose";

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
/** 무통장 입금시 */
export async function addPreOrders() {
  try {
    connectToDB();
  } catch (err) {
    throw new Error(`결제 실패 : ${err}`);
  }
}

/** 무결성 체크를 위해 주문 목록 총 금액 리턴 */
export async function getOrderInProgressTotalPrice() {
  const userSession = await getServerSession(authOptions);
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
}

/** 결제 완료 후 아이템 상태 변경 및 결제 완료 colllection 추가 함수 */
export async function changeItemStatus() {
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
    const itemIds = user.orderInProgress;

    await Promise.all([
      ...itemIds!.map((itemId) =>
        PrepareShipping.create([{ item: itemId }], { session })
      ),
      Item.updateMany(
        { _id: { $in: itemIds } },
        { $set: { soldOut: true } },
        { session }
      ),
      User.updateOne(
        { email: userEmail },
        {
          $set: { orderInProgress: [] },
          $push: { orderComplete: { $each: itemIds } },
        },
        { session }
      ),
    ]);

    await session.commitTransaction(); // 트랜잭션 커밋
  } catch (err) {
    await session.abortTransaction(); // 트랜잭션 롤백
    throw new Error(`결제 승인 후 item 상태 변경 실패 : ${err}`);
  } finally {
    session.endSession(); // 세션 종료
  }
}
