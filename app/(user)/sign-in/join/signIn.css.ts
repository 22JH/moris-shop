import { style } from "@vanilla-extract/css";

export const signInContainer = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
});
