"use server";

import User from "../../models/user.model";
import { connectToDB } from "../../mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/authOptions";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import { UserType, WishListType } from "@/app/types/UserType";

export async function addWishList(item: mongoose.Schema.Types.ObjectId) {
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

export async function getWishList(): Promise<WishListType | undefined> {
  try {
    connectToDB();
    const userSession = await getServerSession(authOptions);
    /** next의 redirect는 내부적으로 Error를 일으키기 때문에
     *  try문에서 redirect가 일어나도 catch의 throw가 잡힌다. */
    if (!userSession) throw new Error("user not-found");

    const res = (await User.findOne({ email: userSession.user.email })
      .populate("wishList", {
        _id: -1,
        thumbnails: 1,
        title: 1,
        price: 1,
        category: 1,
      }) // 'wishList' 필드를 populate하여 Item의 상세 정보를 가져옴
      .select("wishList")
      .lean()
      .exec()) as UserType;
    return res.wishList;
  } catch (err: any) {
    if (err.message === "user not-found") return redirect("/login");
    throw new Error(`장바구니 목록 가져오기 실패 : ${err}`);
  }
}
