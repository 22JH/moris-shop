import { vars } from "@/app/style/theme.css";
import { style, keyframes } from "@vanilla-extract/css";

const moveButton = keyframes({
  "0%": {
    transform: "translate(0, 0)"
  },
  "100%": {
    transform: "translate(4px, 4px)"
  }
})

export const leftSidebarContainer = style({
  width: "50vw",
  height: "100vh",
  backgroundColor: vars.backgroundColor.bodyColor,
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  zIndex: 3,
  transition: "0.4s all",
  top: 0,
  padding: "50px 0 0 20px",
  borderTop: "10px solid black",
  borderRight: "10px solid black",
  borderBottom: "7px solid black",

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
  color: "black",
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
  border: "2px solid black",
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  padding: "5px 10px",
  fontWeight: "bold",
  borderRadius: 4,
});

export const notice = style({
  flex: 1,
});

export const LeftsideBarOutside = style({
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  top: 0,
  right: 0,
  width: "100vw",
  height: "100dvh",
  transition: "transform, 0.1s",
  zIndex: 2,
  // boxShadow: "50vw 0 20px 0 rgba(0, 0, 0, 0.2)",
});
