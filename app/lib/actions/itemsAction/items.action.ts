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
}: GetItemType): Promise<{ items: ItemType[]; totalPost: number; totalPage: number }> {
  const pageSize = Number(process.env.NEXT_PUBLIC_PAGE_SIZE) || 2;
  const skipAmount = (pageNumber - 1) * pageSize;

  try {
    await connectToDB();

    let query = {};
    if (category !== "ALL") {
      query = { category };
    }

    const itemsPromise = await (Item.find(query)
      .skip(skipAmount)
      .limit(pageSize)
      .sort({ _id: -1 })
      .lean()) as ItemType[];

    const totalPostPromise = await Item.countDocuments(query).lean();

    const [items , totalPost] = await Promise.all([itemsPromise, totalPostPromise]);

    // 전체 페이지 수를 계산
    const totalPage = Math.ceil(totalPost / pageSize);

    return { items , totalPost, totalPage };
  } catch (err) {
    // 에러 처리
    throw new Error(`아이템 리스트 가져오기 실패: ${err}`);
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
