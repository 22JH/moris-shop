import type { UserType } from "@/app/types/UserType";
import type { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import TossPayment from "./TossPayment";
import { flex } from "@/app/style/common/common.css";

interface PaymentProps {
  userInfo: UserType;
}

export default function Payment({ userInfo }: PaymentProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("account");
  const [showTossPayment, setShowTossPayment] = useState<boolean>(false);
  const paymentMethodsWidgetRef = useRef();
  const agreementWidgetRef = useRef();

  const totalPrice = userInfo.orderInProgress!.reduce((price, item) => {
    return price + item.price;
  }, 0);

  const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(e.target.id);
  };

  const handlePaymentClick = () => {
    if (selectedMethod === "other") {
      setShowTossPayment(true);
    }
  };
  return (
    <>
      <section>
        <section>
          <h3>결제 정보</h3>
          <p>{totalPrice.toLocaleString("ko-KR")}</p>
        </section>
        <section>
          <input
            type="radio"
            id="account"
            checked={selectedMethod === "account"}
            onChange={handleMethodChange}
          />
          <label htmlFor="account">무통장 입금</label>
          <input
            type="radio"
            id="other"
            checked={selectedMethod === "other"}
            onChange={handleMethodChange}
          />
          <label htmlFor="other">기타 결제</label>
        </section>
        <section className={flex({ direction: "col" })}>
          {selectedMethod === "account" && <input type="text" />}
          <button onClick={handlePaymentClick}>결제하기</button>
        </section>
      </section>
      {showTossPayment && <TossPayment price={totalPrice} />}
    </>
  );
}
