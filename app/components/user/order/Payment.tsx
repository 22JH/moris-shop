import type { UserType } from "@/app/types/UserType";
import { useState } from "react";
import TossPayment from "./TossPayment";
import { flex } from "@/app/style/common/common.css";
import * as styles from "./payment.css";
import { validateUserInfo } from "@/app/lib/utils/payments/validateUserInfo";

interface PaymentProps {
  userInfo: UserType;
}

export default function Payment({ userInfo }: PaymentProps) {
  const [showTossPayment, setShowTossPayment] = useState<boolean>(false);

  const items = userInfo.orderInProgress!;
  const totalPrice = items.reduce((price, item) => {
    return price + item.price;
  }, 0);
  const orderName =
    items.length > 1
      ? `${items![0].title} 외 ${items.length - 1}개`
      : items![0].title;

  const handlePaymentClick = () => {
    if (validateUserInfo(userInfo)) {
      setShowTossPayment(true);
    }
  };

  return (
    <>
      <section className={styles.paymentFrame}>
        <section className={flex({ direction: "col" })}>
          <p>{orderName}</p>
          <p>{totalPrice.toLocaleString("ko-kr")}원</p>
          <button onClick={handlePaymentClick}>결제하기</button>
        </section>
      </section>
      {showTossPayment && (
        <TossPayment
          price={totalPrice}
          orderName={orderName}
          userInfo={userInfo}
          setShowTossPayment={setShowTossPayment}
        />
      )}
    </>
  );
}
