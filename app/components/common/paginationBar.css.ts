import { keyframes, style } from "@vanilla-extract/css";


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


export const paginationBarFrame = style({
  margin: "30px 0", 
  width: "100%",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  gap: 16,
  fontSize: 17,
  fontWeight: "bold",
})

export const paginationButton = style({
  border: "1.5px solid black",
  padding: "2px 6px",
  borderRadius: 4,
  boxShadow: "2.5px 2.5px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "2.5px 2.5px 0px 0px rgba(0,0,0,0.95)",
  backgroundColor: "white"
})

export const activeButton = style({
  animation: `${moveButton} 0.2s forwards`
})