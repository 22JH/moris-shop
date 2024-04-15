import { type PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { useEffect, useRef, useState } from "react";
import * as styles from "./tossPayment.css";
import { UserType } from "@/app/types/UserType";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  loadWidget,
  tossPaymentRequest,
} from "@/app/lib/utils/payments/tossPaymentRequset";

interface TossPaymentProps {
  price: number;
  userInfo: UserType;
  itemName: string;
  setShowTossPayment: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TossPayment({
  price,
  userInfo,
  itemName,
  setShowTossPayment,
}: TossPaymentProps) {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>();
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const [paymentMethodsWidgetReady, isPaymentMethodsWidgetReady] =
    useState<boolean>(false);

  /**
   *  결제 요청 클릭
   */
  const handlePurchaseClick = () => {
    tossPaymentRequest({ itemName, paymentWidgetRef, userInfo });
  };

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadWidget();

      if (paymentWidgetRef.current == null) {
        paymentWidgetRef.current = paymentWidget;
      }

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-methods",
        { value: price },
        { variantKey: "DEFAULT" }
      );

      paymentWidget.renderAgreement("#agreement", {
        variantKey: "AGREEMENT",
      });

      paymentMethodsWidget.on("ready", () => {
        paymentMethodsWidgetRef.current = paymentMethodsWidget;
        isPaymentMethodsWidgetReady(true);
      });
    })();
  }, []);

  return (
    <section className={styles.tossPaymentBackground}>
      <section
        className={styles.tossPaymentFrame}
        style={{ display: paymentMethodsWidgetRef.current ? "block" : "none" }}>
        <div id="payment-methods" />
        <div id="agreement" />
        <button onClick={() => setShowTossPayment(false)}>X</button>
        <button
          onClick={handlePurchaseClick}
          style={assignInlineVars({
            display: paymentMethodsWidgetReady ? "block" : "none",
          })}>
          결제하기
        </button>
      </section>
    </section>
  );
}
