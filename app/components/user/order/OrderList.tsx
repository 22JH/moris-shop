import type { ItemType } from "@/app/types/ItemType";
import * as styles from "./orderList.css";
import WishList from "../wishlist/WishList";
import Image from "next/image";

interface OrderListProps {
  orderList: ItemType[] | undefined;
}

export default function OrderList({ orderList }: OrderListProps) {
  return (
    <>
      <h1>주문 목록</h1>
      {orderList?.map((item) => (
        <section className={styles.orderListItem} key={item._id!.toString()}>
          <Image
            src={item.thumbnails[0] as string}
            width="100"
            height="100"
            alt="thumnail"
          />
          <p>{item.title}</p>
          <p>{item.price.toLocaleString("ko-kr")}원</p>
        </section>
      ))}
    </>
  );
}
