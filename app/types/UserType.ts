import { ItemType } from "./ItemType";

export interface WishListType {
  item: ItemType[];
  isOrderPending: boolean;
}

export interface UserType {
  id?: string;
  email?: string;
  name?: string;
  phone?: string;
  address?: string;
  wishList?: WishListType;
}
