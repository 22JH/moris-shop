import { vars } from "@/app/style/theme.css";
import { style } from "@vanilla-extract/css";
import { createVar } from "@vanilla-extract/css";

export const menuColor = createVar()
export const myPageMenuFrame = style({
  display: "flex",
  justifyContent: "center",
  gap: 10,
  padding: "20px 0",
  borderTop: "4px",
  borderBottom: "4px",
  borderColor: "black",
  borderStyle: "solid",
  backgroundColor: vars.font.color.accentColor
})

export const menuStyle = style({
  display: "flex",
  justifyContent: "center",
  border: "2px solid black",
  backgroundColor: "white",
  padding: "4px 7px",
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  borderRadius: 4,
})