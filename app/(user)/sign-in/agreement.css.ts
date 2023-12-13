import { style } from "@vanilla-extract/css";

export const agreementContainer = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: 600,
  border: "1px solid white",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});
