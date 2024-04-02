"use server";

import User from "../../models/user.model";
import { connectToDB } from "../../mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/authOptions";
import { redirect } from "next/navigation";

export async function addWishList(item: string) {
  try {
    connectToDB();
    const userSession = await getServerSession(authOptions);
    /** next의 redirect는 내부적으로 Error를 일으키기 때문에
     *  try문에서 redirect가 일어나도 catch의 throw가 잡힌다. */
    if (!userSession) throw new Error("user not-found");
    await User.findOneAndUpdate(
      {
        _id: userSession?.user?.id,
      },
      { $addToSet: { wishList: item } }
    );
  } catch (err: any) {
    if (err.message === "user not-found") return redirect("/login");
    else throw new Error(`장바구니 담기에 실패했습니다. : ${err}`);
  }
}

export async function getWishList() {
  try {
    connectToDB();
    const userSession = await getServerSession(authOptions);
    /** next의 redirect는 내부적으로 Error를 일으키기 때문에
     *  try문에서 redirect가 일어나도 catch의 throw가 잡힌다. */
    if (!userSession) throw new Error("user not-found");

    // const items = await User.findById
  } catch (err: any) {
    if (err.message === "user not-found") return redirect("/login");
    throw new Error(`장바구니 목록 가져오기 실패 : ${err}`);
  }
}
