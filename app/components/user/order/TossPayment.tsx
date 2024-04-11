import {
  ANONYMOUS,
  loadPaymentWidget,
  type PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { useEffect, useRef } from "react";
import * as styles from "./tossPayment.css";

export default function TossPayment({ price }: { price: number }) {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>();

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(
        "test_ck_ma60RZblrqyqRM905labrwzYWBn1",
        ANONYMOUS
      ); // 비회원 customerKey

      if (paymentWidgetRef.current == null) {
        paymentWidgetRef.current = paymentWidget;
      }

      /**
       * 결제창을 렌더링합니다.
       * @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods%EC%84%A0%ED%83%9D%EC%9E%90-%EA%B2%B0%EC%A0%9C-%EA%B8%88%EC%95%A1
       */
      const paymentMethodsWidget =
        paymentWidgetRef.current.renderPaymentMethods(
          "#payment-method",
          { value: price },
          { variantKey: "DEFAULT" }
        );
    })();
  }, []);
  return (
    <div className={styles.tossPaymentFrame}>
      <div>
        <div id="payment-method" />
      </div>
    </div>
  );
}
