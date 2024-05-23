import { vars } from "@/app/style/theme.css";
import { style } from "@vanilla-extract/css";
import { calc } from '@vanilla-extract/css-utils';

export const productContainer = style({
  width: "100%",
  // height: calc.subtract("100dvh", vars.size.navbarHeight.desktop),
  // overflow: "scroll",
  // "@media": {
  //   "(max-width : 574px)" :  {
  //     height: calc.subtract("100dvh", vars.size.navbarHeight.mobile),
  //   }
  // }
});
