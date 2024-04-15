"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  checkIntegrity,
  tossPaymentApprove,
} from "@/app/lib/utils/payments/tossPaymentRequset";
import { changeItemStatus } from "@/app/lib/actions/userAction/order.actions";

export default function Success() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");

  useEffect(() => {
    (async () => {
      if (!orderId || !paymentKey || !amount) return;
      /** 무결성 체크 */
      if (!(await checkIntegrity(Number(amount)))) return;
      try {
        const result = await tossPaymentApprove({
          paymentKey,
          amount,
          orderId,
        });

        /** 결제 성공 */
        if (result.status === "DONE") {
          await changeItemStatus();
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
      <>결제 성공</>
    </>
  );
}
