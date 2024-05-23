import { vars } from "@/app/style/theme.css";
import { style, createVar, keyframes } from "@vanilla-extract/css";

export const buttonPosition = createVar()

export const moveButton = keyframes({
  '0%': {
    transform: "translate(0, 0)",
    boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.6)",
    WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)"
  },
  '100%': {
    transform: "translate(4px, 4px)",
    boxShadow: "none",
    WebkitBoxShadow: "none",}
})

export const categoriesFrame = style({
  display: "flex",
  justifyContent: "center",
  columnGap: 10,
  backgroundColor: vars.font.color.accentColor,
  height: 80,
  borderTopWidth: 4,
  borderBottomWidth: 4,
  borderStyle: "solid",
  borderColor: "black",
  padding: "20px 0",
  position: "sticky",
  top: -0.5,
  zIndex: 1,
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  transition: "background 0.5s",
  "@media": {
    "(min-width: 850px)": {
      width: "98%",
      borderRightWidth: 4,
      borderLeftWidth: 4,
      margin: "0 auto",
      position: "relative"
    },
  }
});

export const stuckOnTopStyle = style({
  backgroundColor: "rgba(255, 69, 0, 0.5)"
})

export const categoryItem = style({
  border: "2px solid black",
  backgroundColor: "white",
  padding: "4px 7px",
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.6)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  transform: buttonPosition,
  fontWeight: "bold",
  borderRadius: 4,
})

export const activeButton = style({
  animation: `${moveButton} 0.2s forwards`
})