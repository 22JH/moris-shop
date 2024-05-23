"use server";

import TotalOrders from "../../models/totalOrders.model";
import { connectToDB, } from "../../mongoose";
import type { ShippingItemType } from "@/app/types/ItemType";
import type { ObjectId } from "mongoose";
import "@/app/lib/models/item.model";
import { revalidatePath } from "next/cache";

export async function getAllOrderedItems() {
  try {
    await connectToDB();
    const orders = (await TotalOrders.find()
      .sort({ _id: -1 })
      .lean()) as ShippingItemType[];

    return orders;
  } catch (err) {
    throw new Error(`유저 주문 목록 불러오기 실패 : ${err}`);
  }
}

export async function getShippipedItems() {
  try {
    await connectToDB();
    const orders = (await TotalOrders.find({
      trackingNumber: { $exists: true, $ne: "" },
    })
      .sort({ _id: -1 })
      .lean()) as ShippingItemType[];
    return orders;
  } catch (err) {
    throw new Error(`유저 주문 목록 불러오기 실패 : ${err}`);
  }
}

export async function getNotShippipedItems() {
  try {
    await connectToDB();
    const orders = (await TotalOrders.find({
      $or: [{ trackingNumber: { $exists: false } }, { trackingNumber: "" }],
    })
      .sort({ _id: -1 })
      .lean()) as ShippingItemType[];
    return orders;
  } catch (err) {
    throw new Error(`유저 주문 목록 불러오기 실패 : ${err}`);
  }
}

export async function getDetailOrderedItems(id: string) {
  try {
    await connectToDB();
    const orders = (await TotalOrders.findById(id)
      .populate("item")
      .lean()) as ShippingItemType;
    return orders;
  } catch (err) {
    throw new Error(`유저 주문 목록 아이템 디테일 불러오기 실패 : ${err}`);
  }
}

export async function registTrackingNumber(id: ObjectId ,trackingNumber: string) {
  try {
    await connectToDB()
    await TotalOrders.findByIdAndUpdate(id, {
      trackingNumber
    })
  } catch (err) {
    throw new Error(`운송장 번호 등록 실패 : ${err}`)
  }
}