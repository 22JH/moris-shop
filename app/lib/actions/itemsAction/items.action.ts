"use server";

import { ItemType } from "@/app/types/ItemType";
import Item from "../../models/item.model";
import { connectToDB } from "@/app/lib/mongoose";

interface GetItemType {
  category: string;
  pageNumber: number;
}

export async function createItem({
  contents,
  description,
  category,
  price,
  thumbnails,
  title,
}: ItemType) {
  try {
    connectToDB();
    await Item.create({
      contents,
      description,
      category,
      price,
      thumbnails,
      title,
    });
  } catch (err) {
    throw new Error(`아이템 등록 실패 ${err}`);
  }
}

export async function getItemByCategory({
  category,
  pageNumber,
}: GetItemType): Promise<{ items: ItemType[]; totalPost: number }> {
  try {
    connectToDB();
    const skipAmount =
      (pageNumber - 1) * Number(process.env.NEXT_PUBLIC_PAGE_SIZE);

    /** 카테고리가 ALL일 경우 모두 가져오기 */
    if (category === "ALL") {
      const itemsPromise = (await Item.find({})
        .skip(skipAmount)
        .lean()
        .exec()) as ItemType[];

      const totalPostPromise = Item.countDocuments().lean();

      const [items, totalPost] = await Promise.all([
        itemsPromise,
        totalPostPromise,
      ]);

      return { items, totalPost };
    } else {
      const itemsPromise = (await Item.find({ category })
        .skip(skipAmount)
        .lean()
        .exec()) as ItemType[];
      const totalPostPromise = Item.countDocuments().lean();

      const [items, totalPost] = await Promise.all([
        itemsPromise,
        totalPostPromise,
      ]);
      return { items, totalPost };
    }
  } catch (err) {
    throw new Error(`아이템 리스트 가져오기 실패 ${err}`);
  }
}

export async function getItem({ id }: { id: string }): Promise<ItemType> {
  try {
    connectToDB();
    const item = (await Item.findById(id).lean().exec()) as ItemType;
    return item;
  } catch (err) {
    throw new Error(`아이템 하나 가져오기 실패 ${err}`);
  }
}
