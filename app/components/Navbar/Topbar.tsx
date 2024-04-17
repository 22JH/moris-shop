"use client";

import * as styles from "./Topbar.css";
import { useState } from "react";
import NavbarIcon from "../../assets/icon/NavbarIcon";
import LeftSidebar from "./LeftSidebar";
import CartIcon from "@/app/assets/icon/CartIcon";
import Link from "next/link";

export default function Topbar() {
  const [clickedNavbar, setClickedNavbar] = useState<boolean>(false);

  const handleClickedNavbar = () => {
    setClickedNavbar((prev) => !prev);
  };

  return (
    <>
      <div className={styles.TopbarContainer}>
        <NavbarIcon
          handleClickedNavbar={handleClickedNavbar}
          clickedNavbar={clickedNavbar}
        />
        <div className={styles.icon}>아이콘</div>
        <Link href="/wishlist">
          <CartIcon />
        </Link>
      </div>
      <LeftSidebar
        handleClickedNavbar={handleClickedNavbar}
        clickedNavbar={clickedNavbar}
      />
    </>
  );
}
