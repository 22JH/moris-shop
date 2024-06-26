import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { vars } from "./style/theme.css";

globalFontFace("pretendard", {
  src: 'local("/fonts/Pretendard-Regular.woff")'
})

globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, textarea",
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
    boxSizing: "border-box",
  }
);

globalStyle("body", {
  backgroundColor: vars.backgroundColor.bodyColor,
  width: "100vw",
  height: "auto",
  fontFamily: "pretendard"
});

globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    display: "block",
  }
);

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: "",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("input", {
  margin: 0,
  padding: "0 0 0 10px",
  border: 0,
  boxSizing: "border-box",
});
globalStyle("input:focus", {
  outline: "none",
});

globalStyle("input:read-only", {
  color: "grey",
});

globalStyle("button", {
  border: "none",
  background: "none",
  padding: 0,
  margin: 0,
  color: "inherit",
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
})
