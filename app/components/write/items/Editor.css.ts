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
  "@media": {
    "(max-width: 574px)": {
      width: "100%",
    },
  },
});

export const productDetail = style({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  height: "auto",
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
  position: "fixed",
  border: "1px solid black",
  height: 50,
  width: 50,
  borderRadius: "50%",
  bottom: 50,
  right: 50,
});
