import { style } from "@vanilla-extract/css";
import { vars } from "@/app/style/theme.css";

export const editorContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const inner = style({
  width: "70%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

export const productDetail = style({
  width: "100%",
  display: "flex",
  height: 600,
  columnGap: 10,
});

export const viewStyleFrame = style({
  width: "70%",
  height: "30px",
  minWidth: vars.mediaQuery.mobile,
  display: "flex",
  flexDirection: "row",
});

export const editorStyle = style({
  backgroundColor: "white",
  width: "100%",
  minWidth: vars.mediaQuery.mobile,
  height: `calc(100dvh - ${vars.size.navbarHeight.desktop} - 60px)`,
  borderWidth: "0px 3px 3px 3px",
  borderStyle: "solid",
  "@media": {
    "(max-width: 574px)": {
      width: "100% ",
      minWidth: 0,
    },
  },
});

export const submitBtn = style({
  position: "absolute",
  bottom: 50,
  right: 50,
});
