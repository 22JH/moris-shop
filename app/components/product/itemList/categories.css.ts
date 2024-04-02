import { style } from "@vanilla-extract/css";

export const categoriesFrame = style({
  display: "flex",
  justifyContent: "center",
  columnGap: 20,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: "black",
  padding: "20px 0",
});
