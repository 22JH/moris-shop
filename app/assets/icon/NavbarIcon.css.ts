import { keyframes, style } from "@vanilla-extract/css";

export const moveButton = keyframes({
  '0%': {
    transform: "translate(0, 0)",
    boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.6)",
    WebkitBoxShadow: "3px 3px 0px 0px rgba(0,0,0,0.95)"
  },
  '100%': {
    transform: "translate(3px, 3px)",
    boxShadow: "none",
    WebkitBoxShadow: "none",}
})


export const navbarIconContainer = style({
  position: "absolute",
  cursor: "pointer",
  zIndex: 4,
});

export const svgStyle = style({
  position: "absolute",
  zIndex: 3,
  margin: "20px 0 0 20px",
  width: 32,
  height: 32,
  padding: 2,
  borderRadius: 4,
  boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.6)",
  WebkitBoxShadow: "3px 3px 0px 0px rgba(0,0,0,0.95)",
  border: "2px solid black",
  "@media": {
    "(max-width: 640px)": {
      width: 24,
      height: 24,
    },
  },
});

export const activeButton = style({
  animation: `${moveButton} 0.2s forwards`
})