import { vars } from "@/app/style/theme.css";
import { style } from "@vanilla-extract/css";

export const itemsListFrame = style({
  // border: "1px solid black",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "0 10px",
  marginTop: 20,
  columnGap: 20,
  rowGap: 30,
});

export const itemFrame = style({
  display: "flex",
  flexDirection: "column",
  flexBasis: "calc(25% - 20px)",
  "@media": {
    "(max-width: 750px)": {
      flexBasis: "calc(33% - 20px)",
    },
    "(max-width: 480px)": {
      flexBasis: "calc(49% - 20px)",
    },
  },
});

export const itemImage = style({
  width: "100%",
  position: "relative",
  aspectRatio: "1 / 1",
  border: "1px solid grey",
  marginBottom: 5,
});

export const itemTitle = style({
  fontSize: 14,
});

export const itemDescription = style({
  fontSize: 14,
});

export const itemPrice = style({
  fontSize: 13,
});
