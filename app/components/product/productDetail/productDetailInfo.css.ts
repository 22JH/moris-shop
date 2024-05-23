import { vars } from "@/app/style/theme.css";
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

export const buttonSection = style({
  position: "fixed",
  display: "flex",
  width: "100%",
  bottom: 0,
  height: 60,
  left: 0,
})

export const cartButton = style({
  width: 60,
  backgroundColor: vars.backgroundColor.pointColor,
  color: vars.font.color.normalColor,
  fontWeight: vars.font.fontWeight.bold
})

export const buyButton = style({
  flex: 1,
  backgroundColor: vars.backgroundColor.pointColor,
  color: vars.font.color.normalColor,
  fontWeight: vars.font.fontWeight.bold
})