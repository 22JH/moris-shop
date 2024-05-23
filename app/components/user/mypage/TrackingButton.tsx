"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./trackingbutton.css";
import { vars } from "@/app/style/theme.css";

interface TrackingButtonProps {
  trackingNumber: string | undefined;
}

export default function TrackingButton({
  trackingNumber,
}: TrackingButtonProps) {
  const isShipped = !!trackingNumber;
  return (
    <button
      className={`${isShipped && styles.activeButton} ${styles.trackingButton}`}
    >
      {isShipped ? "배송 현황 보기" : "발송 준비 중"}
    </button>
  );
}
