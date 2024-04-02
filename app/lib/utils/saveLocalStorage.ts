export const loadWishlist = (): string[] => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

/**
 * @param itemId 찜 목록에 추가할 아이템의 ID
 */
export const saveToWishlist = (itemId: string) => {
  const wishlist = loadWishlist();
  if (!wishlist.includes(itemId)) {
    wishlist.push(itemId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
};

/**
 * @param itemId 찜 목록에서 제거할 아이템의 ID
 */
export const removeFromWishlist = (itemId: string) => {
  let wishlist = loadWishlist();
  wishlist = wishlist.filter((id) => id !== itemId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};
