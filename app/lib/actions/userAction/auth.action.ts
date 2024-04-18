"use server";

import User from "@/app/lib/models/user.model";
import { connectToDB } from "@/app/lib/mongoose";
import { UserType } from "@/app/types/UserType";

export async function getUserByEmail({ email }: UserType): Promise<UserType> {
  const user: UserType | null = await User.findOne({ email });
  if (!user) throw new Error("유저를 찾을 수 없습니다.");

  return { _id: user._id!, email: user.email, role: user.role };
}

export async function createUser({ name, phone, email }: UserType) {
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
    throw new Error(
      `유저 정보 수정에 실패했습니다. 다시 시도해 주세요: ${err}`
    );
  }
}
