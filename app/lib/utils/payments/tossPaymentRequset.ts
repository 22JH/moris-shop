import { UserType } from "@/app/types/UserType";
import {
  ANONYMOUS,
  loadPaymentWidget,
  type PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { getOrderInProgressTotalPrice } from "../../actions/userAction/order.actions";
import { redirect } from "next/navigation";
import type { Session } from "next-auth";

interface TossPaymentRequestProps {
  paymentKey: string;
  orderId: string;
  amount: string;
}

interface TossPaymnetRequestProps {
  paymentWidgetRef: React.MutableRefObject<
    PaymentWidgetInstance | null | undefined
  >;
  itemName: string;
  userInfo: UserType;
}

/**
 * 위젯 로딩
 */
export const loadWidget = async () => {
  return await loadPaymentWidget(
    "test_ck_ma60RZblrqyqRM905labrwzYWBn1",
    ANONYMOUS
  );
};

/**
 * 결제 요청
 */
export const tossPaymentRequest = async ({
  itemName,
  paymentWidgetRef,
  userInfo,
}: TossPaymnetRequestProps) => {
  const paymentWidget = paymentWidgetRef?.current;
  try {
    await paymentWidget?.requestPayment({
      orderId: nanoid(),
      orderName: itemName,
      customerName: userInfo.name!,
      customerEmail: userInfo.email,
      successUrl: window.location.origin + "/order/success",
      failUrl: window.location.origin + "/order/fail",
    });
  } catch (error) {
    console.log(error);
  }
};

/** 결제 승인 */
export const tossPaymentApprove = async ({
  paymentKey,
  amount,
  orderId,
}: TossPaymentRequestProps) => {
  try {
    // const key=process.env.TOSS_PAYMENTS_SECRET_KEY
    const key = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
    const res = await fetch(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${key}:`)}`,
        },
        body: JSON.stringify({
          paymentKey,
          orderId,
          amount,
        }),
      }
    );

    if (!res.ok) throw new Error("결제 실패");

    const payment = await res.json();
    return payment;
  } catch (err) {
    return redirect("order/fail");
  }
};
