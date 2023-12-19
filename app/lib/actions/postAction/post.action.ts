"use server";

import Item from "../../models/item.model";
import { connectToDB } from "@/app/lib/mongoose";

export async function createItem({ name, phone, email }: any) {
  try {
    connectToDB();
  } catch (err) {
    throw new Error(`아이템 등록 실패 ${err}`);
  }
}
