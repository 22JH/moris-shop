"use server";

import User from "@/app/lib/models/user.model";
import { connectToDB } from "@/app/lib/mongoose";
import { UserType } from "@/app/types/UserType";

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

export async function updateUser(userInfo: UserType) {
  try {
    connectToDB();
    const { name, phone, email, address, addressDetail, postCode } = userInfo;
    await User.findOneAndUpdate(
      { email: userInfo.email },
      { $set: { name, phone, email, address, addressDetail, postCode } }
    );
  } catch (err) {
    console.log(err);
    alert(`유저 정보 수정에 실패했습니다. 다시 시도해 주세요!`);
  }
}
