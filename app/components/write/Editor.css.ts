import { style } from "@vanilla-extract/css";
import { vars } from "@/app/style/theme.css";

export const editorContainer = style({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  overflowY: "scroll",
});

export const editorStyle = style({
  backgroundColor: "white",
  width: "100% !important",
  minHeight: "90dvh !important",
});
