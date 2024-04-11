import type { ObjectId, Date } from "mongoose";

export interface ItemType {
  _id?: ObjectId;
  thumbnails: (string | ArrayBuffer | null)[];
  title: string;
  description: string;
  price: number;
  category: string;
  contents: string;
  createdAt?: Date;
}
