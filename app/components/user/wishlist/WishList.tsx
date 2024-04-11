"use client";

import * as styles from "./wishlist.css";
import Image from "next/image";
import { titleToUrl } from "@/app/lib/utils/changeKrUrl";
import Link from "next/link";
import type { ObjectId } from "mongoose";
import type { ItemType } from "@/app/types/ItemType";
import useWishListStore from "@/app/store/wishList/wishListStore";

export default function WishList({
  wishList,
}: {
  wishList: ItemType[] | undefined;
}) {
  if (!wishList) return <p>장바구니가 비었습니다.</p>;

  const { selectedItems, setSelectedItems } = useWishListStore();
  const toggleItemSelection = (id: ObjectId) => {
    const isSelected = selectedItems.some(
      (itemId) => itemId.toString() === id.toString()
    );

    setSelectedItems(
      isSelected
        ? selectedItems.filter((itemId) => itemId.toString() !== id.toString())
        : [...selectedItems, id]
    );
  };

  const toggleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems(wishList.map((wishItem) => wishItem._id!) || []);
    } else {
      setSelectedItems([]);
    }
  };

  if (!wishList) return <p>아이템이 없습니다.</p>;
  return (
    <section className={styles.wishListFrame}>
      <div>
        <input
          type="checkbox"
          onChange={(e) => toggleSelectAll(e.target.checked)}
          checked={wishList.length === selectedItems.length}
        />
      </div>
      <section className={styles.wishListItems}>
        {wishList.map((wishItem) => {
          const _url = titleToUrl(wishItem.title);
          return (
            <section
              className={styles.wishListItem}
              key={wishItem._id!.toString()}>
              <section className={styles.wishListItemCheck}>
                <input
                  type="checkbox"
                  onChange={() => toggleItemSelection(wishItem._id!)}
                  checked={selectedItems.includes(wishItem._id!)}
                />
              </section>
              <Link
                href={`/product/${wishItem.category}/${wishItem._id}-${_url}`}
                className={styles.wishListItemLink}>
                <section className={styles.wishListItemThumbnail}>
                  <Image
                    src={wishItem.thumbnails[0] as string}
                    fill
                    className={styles.wishListItemThumbnail}
                    alt={`thumbnail ${wishItem.title}`}
                  />
                </section>
                <section className={styles.wishListItemInfo}>
                  <p>{wishItem.title}</p>
                  <p>{`₩${wishItem.price.toLocaleString("ko-KR")}`}</p>
                </section>
              </Link>
            </section>
          );
        })}
      </section>
    </section>
  );
}
