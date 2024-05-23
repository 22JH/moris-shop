import { style } from "@vanilla-extract/css";

export const tableHeaderStyle = style({
	whiteSpace: "nowrap",
	fontWeight: "bold",
	fontSize: 13,
})

export const tableBodyStyle = style({
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	overflow: "hidden",
	// display: "block"
	fontSize: 13,
})

export const tableStyle = style({
	borderSpacing: "10px 10px",
	border: "1px solid black",
	borderRadius: 10
})