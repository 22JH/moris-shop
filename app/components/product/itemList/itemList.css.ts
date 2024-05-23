import { style } from "@vanilla-extract/css";

export const itemsListFrame = style({
  display: "grid",
  "@media": {
    "(max-width: 750px)": {
      gridTemplateColumns: "1fr 1fr 1fr"
    },
    "(max-width: 480px)": {
      gridTemplateColumns: "1fr 1fr"
    },
  },
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  padding: "0 10px",
  marginTop: 20,
  columnGap: 20,
  rowGap: 20,
});

export const itemFrame = style({
  border: "2px solid black",
  boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  WebkitBoxShadow: "4px 4px 0px 0px rgba(0,0,0,0.95)",
  borderRadius: 4,
});

export const itemImage = style({
  width: "100%",
  position: "relative",
  aspectRatio: "1 / 1",
  border: "1px solid grey",
  marginBottom: 5,
});

export const itemInfo = style({
  padding: "5px 10px"
})

export const itemTitle = style({
  fontSize: 14,
});

export const itemDescription = style({
  fontSize: 14,
});

export const itemPrice = style({
  fontSize: 13,
});
