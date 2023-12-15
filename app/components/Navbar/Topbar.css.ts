import { style } from "@vanilla-extract/css";
import { vars } from "../../style/theme.css";

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
});
