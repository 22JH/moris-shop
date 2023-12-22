import { vars } from "@/app/style/theme.css";
import { style } from "@vanilla-extract/css";

export const productDescriptionContainer = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  rowGap: 10,
  minWidth: `calc(${576 / 2}px - 5px)`, // vars.mediaquery.size.mobile / 2
  "@media": {
    "(max-width: 822px)": {
      minWidth: vars.mediaQuery.mobile, // flew-warp 되기 시작하는 시점
    },
    "(max-width: 574px)": {
      minWidth: 0,
    },
  },
});

export const productTitle = style({
  width: "100%",
  height: 30,
});
export const productDescription = style({
  width: "100%",
  height: 30,
});
export const productPrice = style({
  display: "flex",
  columnGap: 5,
});
