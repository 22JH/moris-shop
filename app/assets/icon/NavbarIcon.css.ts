import { style } from "@vanilla-extract/css";

export const navbarIconContainer = style({
  position: "absolute",
  cursor: "pointer",
});

export const svgStyle = style({
  position: "absolute",
  zIndex: 3,
  margin: "20px 0 0 20px",
  width: 32,
  height: 32,
  "@media": {
    "(max-width: 640px)": {
      width: 24,
      height: 24,
    },
  },
});
