import { style } from "@vanilla-extract/css";

export const orderedListFrame = style({
  margin: "0 10px",
});

export const orderedItem = style({
  display: "flex",
  flexDirection: "column",
  padding: "8px 8px 50px 8px",
  border: "2.5px solid black",
  margin: "15px 0",
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  borderRadius: 4,
  position: "relative",
});

export const orderInfo = style({
  margin: "16px 0 12px 0",
  padding: "0 5px",
  display: "flex",
  flexDirection: "column",
  gap: 5,
});

export const orderInfoKey = style({
  minWidth: 100,
});

export const orderInfoValue = style({
  textAlign: "right",
  lineBreak: "anywhere",
});
