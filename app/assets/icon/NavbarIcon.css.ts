import { style } from "@vanilla-extract/css";

export const navbarIconContainer = style({
  cursor: "pointer",
});

export const svgStyle = style({
  width: 32,
  height: 32,
  "@media": {
    "(max-width: 640px)": {
      width: 24,
      height: 24,
    },
  },
});
