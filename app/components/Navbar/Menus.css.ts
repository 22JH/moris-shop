import { navy } from "@/app/style/palette";
import { style } from "@vanilla-extract/css";

export const menusConatiner = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const auth = style({
  display: "flex",
  columnGap: 10,
  height: "fit-content",
  padding: "30px 0",
  color: "white",
});

export const items = style({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  color: "rgb(255,69,0)",
  fontWeight: "bold",
  flex: 1,
  rowGap: 15,
  fontSize: 18,
});

export const notice = style({
  flex: 1,
  border: "1px solid white",
});
