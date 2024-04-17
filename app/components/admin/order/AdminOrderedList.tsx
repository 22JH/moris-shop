"use client";

import { flex } from "@/app/style/common/common.css";
import type { ShippingItemType } from "@/app/types/ItemType";
import Link from "next/link";

export default function AdminOrderedList({
  orders,
}: {
  orders: ShippingItemType[];
}) {
  return (
    <>
      {orders.map((order) => {
        return (
          <section
            key={order._id!.toString()}
            className={flex({ direction: "row" })}>
            <p>주문자 성함 : {order.name}</p>
            <p>가격 : {Number(order.amount).toLocaleString("ko-KR")}</p>
            <p>
              운송장 번호 :{" "}
              {order.trackingNumber ? "운송장번호" : <input type="text" />}
            </p>
            <Link href={`/admin/order/detail/${order._id}`}>
              <p>자세히 보기</p>
            </Link>
          </section>
        );
      })}
    </>
  );
}
