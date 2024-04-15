import { style } from "@vanilla-extract/css";

export const tossPaymentBackground = style({
  width: "100vw",
  height: "100dvh",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 3,
  backgroundColor: "rgba(0,0,0,0.3)",
});

export const tossPaymentFrame = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxWidth: 600,
  minWidth: 350,
});
