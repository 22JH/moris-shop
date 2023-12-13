"use client";

import { useState } from "react";
import NavbarIcon from "../../assets/icon/NavbarIcon";
import * as styles from "./MenuBar.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Menus from "./Menus";

export default function MenuBar() {
  const [clickedNavbar, setClickedNavbar] = useState<boolean>(false);

  const handleClickedNavbar = () => {
    setClickedNavbar((prev) => !prev);
  };
  return (
    <>
      <div
        className={styles.MenuBarContainer}
        style={assignInlineVars({
          transform: clickedNavbar
            ? "translate(0, 0)"
            : "translateX(calc(-50vw + 30px))",
          opacity: clickedNavbar ? "1" : "0",
        })}
      >
        <div className={styles.menus}>
          <Menus handleClickedNavbar={handleClickedNavbar} />
        </div>
      </div>
      <div
        className={styles.navBarIcon}
        style={assignInlineVars({
          transform: clickedNavbar
            ? "translateX(calc(50vw - 30px))"
            : "translateX(0)",
        })}
      >
        <NavbarIcon
          handleClickedNavbar={handleClickedNavbar}
          clickedNavbar={clickedNavbar}
        />
      </div>
    </>
  );
}
