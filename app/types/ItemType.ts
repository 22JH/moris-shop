import mongoose, { Date } from "mongoose";

export interface ItemType {
  _id?: mongoose.Schema.Types.ObjectId;
  thumbnails: (string | ArrayBuffer | null)[];
  title: string;
  description: string;
  price: number;
  category: string;
  contents: string;
  createdAt?: Date;
}
