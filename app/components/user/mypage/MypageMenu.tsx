"use client";

import Link from "next/link";
import * as styles from "./mypageMenu.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@/app/style/theme.css";
import { usePathname } from "next/navigation";
export default function MypageMenu() {
  const pathname = usePathname();
  const isOrderedPage = pathname === "/mypage/ordered";
  return (
    <section className={styles.myPageMenuFrame}>
      <Link href="/mypage/ordered" className={styles.menuStyle}>
        주문 내역
      </Link>
      <Link
        href="/mypage/question"
        className={styles.menuStyle}
        style={assignInlineVars({
          [styles.menuColor]: isOrderedPage
            ? "trasparent"
            : vars.backgroundColor.pointColor,
        })}
      >
        문의 내역
      </Link>
    </section>
  );
}
