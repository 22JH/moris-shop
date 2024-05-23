import { ShippingItemType } from "@/app/types/ItemType";
import * as styles from "./orderdList.css";
import dayjs from "dayjs";
import { flex } from "@/app/style/common/common.css";
import OrderList from "../order/OrderList";
import TrackingButton from "./TrackingButton";

interface OrderedListProps {
  orders: ShippingItemType[] | undefined;
}

export default function OrderedList({ orders }: OrderedListProps) {
  if (!orders) {
    return (
      <>
        <p>최근 주문 내역이 없습니다.</p>
      </>
    );
  }
  return (
    <section className={styles.orderedListFrame}>
      {orders?.map((order) => {
        return (
          <div key={order._id!.toString()} className={styles.orderedItem}>
            <div className={flex({ direction: "col" })}></div>
            <div>
              <OrderList orderList={order.item} />
            </div>
            <article className={styles.orderInfo}>
              <div className={flex({ direction: "row", justify: "between" })}>
                <p className={styles.orderInfoKey}>주문 날짜</p>
                <p className={styles.orderInfoValue}>
                  {dayjs(order.orderdDate).format("YYYY-MM-DD")}
                </p>
              </div>
              <div className={flex({ direction: "row", justify: "between" })}>
                <p className={styles.orderInfoKey}>주문 상품</p>
                <p className={styles.orderInfoValue}>{order.orderName}</p>
              </div>
              <div className={flex({ direction: "row", justify: "between" })}>
                <p className={styles.orderInfoKey}>총 결제 금액</p>
                <p className={styles.orderInfoValue}>
                  {Number(order.amount).toLocaleString("ko-kr")}원
                </p>
              </div>
              <div className={flex({ direction: "row", justify: "between" })}>
                <p className={styles.orderInfoKey}>배송 상태</p>
                <p className={styles.orderInfoValue}>
                  {order.trackingNumber ? "배송 중" : "발송 예정"}
                </p>
              </div>
            </article>
            <TrackingButton trackingNumber={order.trackingNumber} />
          </div>
        );
      })}
    </section>
  );
}
