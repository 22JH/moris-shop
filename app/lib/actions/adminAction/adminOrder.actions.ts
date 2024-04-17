"use server";

import PrepareShipping from "../../models/prepareShipping.model";
import { connectToDB } from "../../mongoose";
import type { ShippingItemType } from "@/app/types/ItemType";
import "@/app/lib/models/item.model";

export async function getPrepareShippingItems() {
  try {
    await connectToDB();
    const order = (await PrepareShipping.find()
      .sort({ _id: -1 })
      .lean()) as ShippingItemType[];

    return order;
  } catch (err) {
    throw new Error(`유저 주문 목록 불러오기 실패 : ${err}`);
  }
}

export async function getDetailPrepareShippingItem(id: string) {
  try {
    await connectToDB();
    const orders = (await PrepareShipping.findById(id)
      .populate("item")
      .select("item")
      .lean()) as ShippingItemType;
    return orders.item;
  } catch (err) {
    throw new Error(`유저 주문 목록 아이템 디테일 불러오기 실패 : ${err}`);
  }
}
