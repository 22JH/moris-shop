"use client";

import { ItemType, ShippingItemType } from "@/app/types/ItemType";
import BackBtn from "../../common/BackBtn";
import OrderList from "../../user/order/OrderList";
import * as styles from "./adminorderDetail.css";
import { font } from "@/app/style/common/common.css";
import { useState } from "react";
import { registTrackingNumber } from "@/app/lib/actions/adminAction/adminOrder.actions";
import usePopup from "@/app/lib/hooks/usePopup";

export default function OrderDetail({ orders }: { orders: ShippingItemType }) {
  const { showPopup, renderPopup } = usePopup();
  const [error, setError] = useState<string>("");
  const [trackingNumber, setTrackingNumber] = useState<string | undefined>(
    orders.trackingNumber
  );

  const handleTrackingNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackingNumber(e.target.value);
  };

  const clickRegistTrackingNumber = async () => {
    if (!trackingNumber) {
      setError("운송장 입력하고 누르셈");
      return;
    }
    try {
      await registTrackingNumber(orders._id!, trackingNumber);
      showPopup(<p>운송장 번호를 등록했습니다.</p>, 2500);
    } catch {
      setError("운송장 번호 등록 실패");
    }
  };
  return (
    <section className={styles.orderDetailFrame}>
      <section className={styles.backBtnPosition}>
        <BackBtn>
          <p>x</p>
        </BackBtn>
      </section>
      <OrderList orderList={orders.item} />
      <p className={font({ weight: 700 })}>주문 금액</p>
      <p className={font({ size: "medium" })}>
        {Number(orders.amount).toLocaleString("ko-kr")}원
      </p>
      <section>
        <input
          type="text"
          value={trackingNumber || ""}
          placeholder="운송장 번호"
          onChange={handleTrackingNumber}
        />
        <button onClick={clickRegistTrackingNumber}>
          {orders.trackingNumber ? "수정" : "등록"}
        </button>
      </section>
      <p className={font({ size: "small" })}>{error}</p>
      {renderPopup()}
    </section>
  );
}
