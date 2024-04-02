"use server";

import User from "@/app/lib/models/user.model";
import { connectToDB } from "@/app/lib/mongoose";

export async function createUser({ name, phone, email }: any) {
  try {
    connectToDB();
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      User.create({ name, phone, email });
    }
  } catch (err) {
    throw new Error(`유저 로그인 실패 ${err}`);
  }
}
