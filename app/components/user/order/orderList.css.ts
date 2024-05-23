import { style } from "@vanilla-extract/css";

export const orderListFrame = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const orderListItem = style({
  display: "flex",
  flexDirection: "row",
  gap: 12,
  borderRadius: 4,
  border: "1px solid black",
  padding: "4px 10px",
  boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.95)",
});

export const orderListTitleFrame = style({
  width: "fit-content",
  border: "1px solid black",
  borderRadius: 4,
  boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.95)",
  padding: "4px 10px",
})

export const description = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
})

export const hrStyle = style({
  width: "100%",
  color: "black"
})