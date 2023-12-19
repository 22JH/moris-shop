import { style } from "@vanilla-extract/css";

export const icon = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

export const TopbarContainer = style({
  position: "relative",
  width: "100vw",
  height: 80,
  transition: "all 0.4s",
  "@media": {
    "(max-width: 574px)": {
      height: 60,
    },
  },
});
