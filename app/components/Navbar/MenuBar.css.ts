import { style } from "@vanilla-extract/css";
import { orange } from "../../style/palette";

export const MenuBarContainer = style({
  backgroundColor: orange[100],
  display: "flex",
  position: "absolute",
  height: "100dvh",
  width: "50vw",
  transition: "all 0.3s",
  padding: 20,
});

export const navBarIcon = style({
  position: "absolute",
  display: "flex",
  height: "fit-content",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  transition: "all 0.3s",
  top: 20,
  left: 20,
});

export const menus = style({
  flex: 1,
});
