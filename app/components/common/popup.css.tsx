import { vars } from "@/app/style/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const slide = keyframes({
  "0%": {
    transform: "translateY(-100%)",
  },
  "5%": {
    transform: "translateY(0%)",
  },
  "95%": {
    transform: "translateY(-0%)",
  },
  "100%": {
    transform: "translateY(-100%)",
  },
});

export const popupFrame = style({
  backgroundColor: vars.backgroundColor.pointColor,
  color: "white",
  fontWeight: "bold",
  position: "fixed",
  top: 0,
  right: 0,
  padding: 16,
  animation: `${slide} 2s forwards`,
});
