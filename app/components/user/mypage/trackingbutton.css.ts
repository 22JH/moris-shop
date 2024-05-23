import { vars } from "@/app/style/theme.css";
import { style, createVar } from "@vanilla-extract/css";

export const backgroundColor = createVar()

export const trackingButton = style({
  position: "absolute",
  width: "70%",
  bottom: 10,
  backgroundColor,
  color: "black",
  border: "2px solid black",
  left: "50%",
  transform: "translateX(-50%)",
  height: 36,
  fontWeight: "bold",
  borderRadius: 4,
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
});

export const activeButton = style({
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  backgroundColor: vars.font.color.accentColor
})