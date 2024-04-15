import { style } from "@vanilla-extract/css";

export const userInfoFrame = style({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
});

export const userNameInputStyle = style({
  width: 150,
  height: 30,
  paddingLeft: 5,
});

export const userEmailInputStyle = style({
  width: 300,
  height: 30,
  paddingLeft: 5,
});
