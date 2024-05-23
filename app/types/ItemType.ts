import type { ObjectId } from "mongoose";
import { UserType } from "./UserType";

export interface ItemType {
  _id?: ObjectId;
  thumbnails: (string | ArrayBuffer | null)[];
  title: string;
  description: string;
  price: number;
  category: string;
  contents: string;
  createdAt?: string;
  soldOut?: boolean;
}

export interface ShippingItemType extends UserType {
  item: ItemType[];
  amount: string;
  trackingNumber: string;
  orderName: string;
  orderdDate: string;
}
