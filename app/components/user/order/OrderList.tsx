import type { ItemType } from "@/app/types/ItemType";
import * as styles from "./orderList.css";
import WishList from "../wishlist/WishList";

interface OrderListProps {
  orderList: ItemType[] | undefined;
}

export default function OrderList({ orderList }: OrderListProps) {
  return (
    <>
      <h1>주문 목록</h1>
      {orderList?.map((item) => (
        <p key={item._id!.toString()}>{item.title}</p>
      ))}
    </>
  );
}
