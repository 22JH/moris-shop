import { ItemType } from "@/app/types/ItemType";
import BackBtn from "../../common/BackBtn";
import OrderList from "../../user/order/OrderList";
import * as styles from "./adminorderDetail.css";

export default function OrderDetail({ orders }: { orders: ItemType[] }) {
  return (
    <section className={styles.orderDetailFrame}>
      <section className={styles.backBtnPosition}>
        <BackBtn>
          <p>x</p>
        </BackBtn>
      </section>
      <OrderList orderList={orders} />
    </section>
  );
}
