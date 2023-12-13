import { style } from "@vanilla-extract/css";

export const loginContainer = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  height: "fit-content",
});

export const loginInput = style({});
