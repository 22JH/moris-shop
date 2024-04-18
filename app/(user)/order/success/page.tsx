"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { tossPaymentApprove } from "@/app/lib/actions/userAction/tossPayment.actions";

export default function Success() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");

  useEffect(() => {
    if (!orderId || !paymentKey || !amount) return router.push("/order/fail");
    (async () => {
      await tossPaymentApprove({
        paymentKey,
        amount,
        orderId,
      });
      setIsSuccess(true);
    })();
  }, []);
  return <>{isSuccess ? <p>결제 성공</p> : <p>결제 승인 중</p>}</>;
}
