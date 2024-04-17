"use server";

import type { ObjectId } from "mongoose";
import User from "../../models/user.model";
import { connectToDB } from "../../mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/authOptions";
import { redirect } from "next/navigation";
import { UserType } from "@/app/types/UserType";
import { ItemType } from "@/app/types/ItemType";
import "../../models/item.model";

/**
 * 장바구니 추가
 */
export async function addWishList(item: ObjectId) {
  try {
    connectToDB();
    const userSession = await getServerSession(authOptions);
    /** next의 redirect는 내부적으로 Error를 일으키기 때문에
     *  try문에서 redirect가 일어나도 catch의 throw가 잡힌다. */
    if (!userSession) throw new Error("user not-found");
    await User.findOneAndUpdate(
      { email: userSession.user.email },
      { $addToSet: { wishList: item } }
    );
  } catch (err: any) {
    if (err.message === "user not-found") return redirect("/login");
    else throw new Error(`장바구니 담기에 실패했습니다. : ${err}`);
  }
}

/**
 * 장바구니 목록 가져오기
 */
export async function getWishList(): Promise<ItemType[] | undefined> {
  try {
    connectToDB();
    const userSession = await getServerSession(authOptions);
    /** next의 redirect는 내부적으로 Error를 일으키기 때문에
     *  try문에서 redirect가 일어나도 catch의 throw가 잡힌다. */
    if (!userSession) throw new Error("user not-found");

    const res = (await User.findOne({ email: userSession.user.email })
      .populate("wishList", {
        thumbnails: 1,
        title: 1,
        price: 1,
        category: 1,
      }) // 'wishList' 필드를 populate하여 Item의 상세 정보를 가져옴
      .select("wishList")
      .sort({ _id: -1 })
      .lean()
      .exec()) as UserType;
    return res.wishList;
  } catch (err: any) {
    if (err.message === "user not-found") return redirect("/login");
    throw new Error(`장바구니 목록 가져오기 실패 : ${err}`);
  }
}

/**
 * 장바구니에서 결제 진행 시 해당 아이템을 orderInProgress collection으로 옮긴다
 */
export async function changeWihsListItemPending(items: ObjectId[]) {
  try {
    connectToDB();
    const userSession = await getServerSession(authOptions);
    /** next의 redirect는 내부적으로 Error를 일으키기 때문에
     *  try문에서 redirect가 일어나도 catch의 throw가 잡힌다. */
    if (!userSession) throw new Error("user not-found");

    await User.findOneAndUpdate(
      { email: userSession.user.email },
      { $set: { orderInProgress: items } }
    );
  } catch (err: any) {
    if (err.message === "user not-found") return redirect("/login");
  }
}
