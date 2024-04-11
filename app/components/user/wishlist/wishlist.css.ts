import { style } from "@vanilla-extract/css";

/**
 * 전체 프레임
 */
export const wishListFrame = style({
  display: "flex",
  flexDirection: "column",
  rowGap: 20,
  width: "100%",
  margin: "0 15px",
  maxWidth: 890,
  minWidth: 310,
});

/**
 * 장바구니 목록 프레임
 */
export const wishListItems = style({
  display: "flex",
  flexDirection: "column",
  rowGap: 15,
});

/**
 *  장바구니 목록 아이템
 */
export const wishListItem = style({
  display: "flex",
  columnGap: 20,
});

/**
 * 장바구니 목록 체크 버튼
 */
export const wishListItemCheck = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

/**
 * 장바구니 목록 Link버튼
 */
export const wishListItemLink = style({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  columnGap: 20,
});

/**
 * 장바구니 목록 아이템 썸네일
 */
export const wishListItemThumbnail = style({
  maxWidth: 120,
  width: "100%",
  aspectRatio: "1 / 1",
  position: "relative",
});

/**
 * 장바구니 목록 아이템 정보(이름, 가격)
 */
export const wishListItemInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
});
