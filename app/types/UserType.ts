import type { ItemType } from "./ItemType";
import type { ObjectId } from "mongoose";

export interface UserType {
  id?: ObjectId;
  email?: string;
  name?: string;
  phone?: string;
  address?: string;
  addressDetail?: string;
  postCode?: string;
  wishList?: ItemType[];
  orderInProgress?: ItemType[];
}
