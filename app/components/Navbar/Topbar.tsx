"use client";

import * as styles from "./Topbar.css";
import LeftSidebar from "./LeftSidebar";
import { useState } from "react";
import NavbarIcon from "../../assets/icon/NavbarIcon";
import CartIcon from "@/app/assets/icon/CartIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
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
        <Link href="/" className={styles.icon}>
          MORRIS SHOP
        </Link>
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
