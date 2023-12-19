import { style } from "@vanilla-extract/css";

export const thumbnailContainer = style({
  flex: 1,
  height: "100%",
  border: "1px solid black",
});

export const carousel = style({
  overflow: "hidden",
  height: "100%",
});

export const thumbnails = style({
  display: "flex",
  height: "100%",
});

export const thumbnail = style({
  flex: "0 0 100%",
  // width: "100%",
  // height: "100%",
  width: 500,
  height: 500,
  aspectRatio: "1 / 1",
  minWidth: 0,
  position: "relative",
  border: "1px solid black",
});

export const deleteButtonFrame = style({
  position: "absolute",
  top: 20,
  right: 20,
  borderRadius: 10,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: 10,
  cursor: "pointer",
});

export const addThumbnailButtonFrame = style({
  flex: "0 0 100%",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const addThumbnailButton = style({
  width: 100,
  height: 100,
  backgroundColor: "black",
});

export const productDescriptionFrame = style({
  flex: 1,
  height: "100%",
});
