import { vars } from "@/app/style/theme.css";
import { style } from "@vanilla-extract/css";

export const leftSidebarContainer = style({
  width: "50vw",
  height: "100dvh",
  backgroundColor: vars.backgroundColor.pointColor,
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  zIndex: 2,
  transition: "0.4s all",
  top: 0,
  padding: "50px 0 0 20px",
});

export const closeButton = style({
  position: "absolute",
  top: 0,
  right: 0,
});

export const auth = style({
  display: "flex",
  columnGap: 10,
  height: "fit-content",
  padding: "30px 0",
  color: "white",
});

export const items = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  rowGap: 15,
  fontSize: 18,
});

export const item = style({
  cursor: "pointer",
  color: vars.font.color.accentColor,
  width: "fit-content",
});

export const notice = style({
  flex: 1,
});

export const LeftsideBarOutside = style({
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  top: 0,
  right: 0,
  width: "100vw",
  height: "100dvh",
  transition: "transform, 0.1s",
  zIndex: 1,
  // boxShadow: "50vw 0 20px 0 rgba(0, 0, 0, 0.2)",
});
