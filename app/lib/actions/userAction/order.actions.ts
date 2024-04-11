"use server";

import { redirect } from "next/navigation";
import { connectToDB } from "../../mongoose";
import { authOptions } from "../../utils/authOptions";
import { getServerSession } from "next-auth";
import User from "../../models/user.model";
import type { UserType } from "@/app/types/UserType";

export async function getOrderList(): Promise<UserType | undefined> {
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
