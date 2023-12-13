import { style } from "@vanilla-extract/css";

export const cartIconContainer = style({
  position: "absolute",
  padding: "20px 30px",
  right: 0,
  top: 0,
  "@media": {
    "(max-width: 640px)": {
      padding: 20,
    },
  },
});

export const svgStyle = style({
  cursor: "pointer",
  width: 32,
  height: 32,
  "@media": {
    "(max-width: 640px)": {
      width: 24,
      height: 24,
    },
  },
});
