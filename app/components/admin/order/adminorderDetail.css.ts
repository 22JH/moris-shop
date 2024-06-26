import { style } from "@vanilla-extract/css";

export const orderDetailFrame = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid black",
  width: "50%",
  minWidth: 330,
  padding: 15,
  backgroundColor: "rgba(255, 255 , 255, 0.9)",
  borderRadius: 10
});

export const backBtnPosition = style({
  position: "absolute",
  top: 5,
  right: 10,
});
