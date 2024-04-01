import { style } from "@vanilla-extract/css";

export const productDetailInfoFrame = style({
  display: "flex",
  columnGap: 10,
  flexWrap: "wrap",
});

export const productInfo = style({
  flex: 1.2,
  lineHeight: 2,
  minWidth: 300,
});

export const itemNameStyle = style({
  fontSize: 16,
});

export const itemDescriptionStyle = style({
  fontSize: 12,
});
