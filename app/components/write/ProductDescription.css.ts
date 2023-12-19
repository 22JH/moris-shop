import { style } from "@vanilla-extract/css";

export const productDescriptionContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  rowGap: 10,
});

export const productTitle = style({
  width: "100%",
  height: 30,
});
export const productDescription = style({
  width: "100%",
  height: 30,
});
export const productPrice = style({});
