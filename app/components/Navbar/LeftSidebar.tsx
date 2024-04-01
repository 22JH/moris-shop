import Link from "next/link";
import * as styles from "./LeftSidebar.css";
import { menus } from "../../constants/menus";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface LeftSidebarProps {
  handleClickedNavbar: () => void;
  clickedNavbar: boolean;
}

export default function Menus({
  handleClickedNavbar,
  clickedNavbar,
}: LeftSidebarProps) {
  return (
    <>
      <div
        className={styles.leftSidebarContainer}
        style={assignInlineVars({
          opacity: clickedNavbar ? "100%" : "0%",
          transform: clickedNavbar ? "translateX(0)" : "translateX(-100vw)",
        })}>
        <button
          onClick={() => handleClickedNavbar()}
          className={styles.closeButton}>
          close
        </button>
        <div className={styles.auth}>
          <Link onClick={() => handleClickedNavbar()} href="/login">
            로그인
          </Link>
          <Link href="/sign-in">회원가입</Link>
        </div>
        <div className={styles.items}>
          {menus.map((menu) => {
            return (
              <Link
                href={menu.url}
                key={menu.category}
                className={styles.item}
                onClick={() => handleClickedNavbar()}>
                {menu.category}
              </Link>
            );
          })}
        </div>
        <div className={styles.notice}></div>
      </div>
      <div
        style={assignInlineVars({
          transform: clickedNavbar ? "translateX(0)" : "translateX(-100vw)",
          opacity: clickedNavbar ? "100%" : "0%",
        })}
        className={styles.LeftsideBarOutside}
        onClick={() => handleClickedNavbar()}
      />
    </>
  );
}
