"use server";

import { redirect } from "next/navigation";
import {
  changeItemStatus,
  getOrderInProgressTotalPrice,
} from "./order.actions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../utils/authOptions";
import { type Session } from "next-auth";

interface TossPaymentRequestProps {
  paymentKey: string;
  orderId: string;
  amount: string;
}

/** 무결성 체크 */
export const checkIntegrity = async (amount: number, userSession: Session) => {
  // const orderList = getOrderInProgressTotalPrice
  const totalPrice = await getOrderInProgressTotalPrice(userSession);
  if (totalPrice === amount) return true;
  return false;
};

/** 결제 승인 */
export const tossPaymentApprove = async ({
  paymentKey,
  amount,
  orderId,
}: TossPaymentRequestProps) => {
  const key = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
  // const key=process.env.TOSS_PAYMENTS_SECRET_KEY
  try {
    const userSession = await getServerSession(authOptions);

    if (!userSession) throw new Error("세션 만료");

    if (!(await checkIntegrity(Number(amount), userSession)))
      throw new Error("무결성 체크 실패");

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
    await changeItemStatus(amount, payment.orderName);
  } catch (err: any) {
    return redirect(`/order/fail?message=${err.message}`);
  }
};
