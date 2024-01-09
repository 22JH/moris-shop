import { Types, Date } from "mongoose";

export interface ItemType {
  _id?: Types.ObjectId;
  thumbnails: (string | ArrayBuffer | null)[];
  title: string;
  description: string;
  price: number;
  category: string;
  contents: string;
  createdAt?: Date;
}
