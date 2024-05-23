import Link from "next/link";
import * as styles from "./LeftSidebar.css";
import { menus } from "../../constants/menus";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { allowScroll, preventScroll } from "@/app/lib/utils/scroll";

interface LeftSidebarProps {
  handleClickedNavbar: () => void;
  clickedNavbar: boolean;
}

export default function LeftSidebar({
  handleClickedNavbar,
  clickedNavbar,
}: LeftSidebarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const params = useParams<{ category: string }>();
  const category = params.category;

  useEffect(() => {
    (async function () {
      const session = await getSession();
      if (session) setIsLoggedIn(true);
    })();
  }, []);

  useEffect(() => {
    const prevScrollY = preventScroll;
    if (clickedNavbar) prevScrollY();
    return () => allowScroll(prevScrollY());
  }, [clickedNavbar]);
  return (
    <>
      <div
        className={styles.leftSidebarContainer}
        style={assignInlineVars({
          opacity: clickedNavbar ? "100%" : "0%",
          transform: clickedNavbar ? "translateX(0)" : "translateX(-100vw)",
        })}
      >
        <div className={styles.auth}>
          {isLoggedIn ? (
            <>
              <button onClick={() => signOut()}>로그아웃</button>
              <Link
                href="/mypage/ordered"
                onClick={() => handleClickedNavbar()}
              >
                마이 페이지
              </Link>
            </>
          ) : (
            <Link onClick={() => handleClickedNavbar()} href="/login">
              로그인 / 회원가입
            </Link>
          )}
        </div>
        <div className={styles.items}>
          {menus.map((menu) => {
            const isActive = category === menu.category;
            return (
              <Link
                href={menu.url}
                key={menu.category}
                className={styles.item}
                style={assignInlineVars({
                  boxShadow: isActive
                    ? "none"
                    : "4px 4px 0px 0px rgba(0,0,0,0.95)",
                  transform: isActive
                    ? "translate(4px, 4px)"
                    : "translate(0, 0)",
                })}
                onClick={() => handleClickedNavbar()}
              >
                {menu.category}
              </Link>
            );
          })}
        </div>
        <div className={styles.notice}></div>
      </div>
      <div
        style={assignInlineVars({
          display: clickedNavbar ? "block" : "none",
        })}
        className={styles.LeftsideBarOutside}
        onClick={() => handleClickedNavbar()}
      />
    </>
  );
}
