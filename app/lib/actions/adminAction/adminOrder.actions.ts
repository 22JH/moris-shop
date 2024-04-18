"use server";

import TotalOrders from "../../models/totalOrders.model";
import { connectToDB } from "../../mongoose";
import type { ShippingItemType } from "@/app/types/ItemType";
import "@/app/lib/models/item.model";

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
      .select("item")
      .lean()) as ShippingItemType;
    return orders.item;
  } catch (err) {
    throw new Error(`유저 주문 목록 아이템 디테일 불러오기 실패 : ${err}`);
  }
}
