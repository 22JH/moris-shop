import { ItemType } from "./ItemType";

export interface UserType {
  id?: string;
  email?: string;
  name?: string;
  phone?: string;
  address?: string;
  wishList?: ItemType[];
}
