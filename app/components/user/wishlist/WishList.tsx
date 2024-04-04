"use client";

import * as styles from "./wishlist.css";
import Image from "next/image";
import { titleToUrl } from "@/app/lib/utils/changeKrUrl";
import Link from "next/link";
import { useState } from "react";
import type { ObjectId } from "mongoose";
import { WishListType } from "@/app/types/UserType";

export default function WishList({
  wishList,
}: {
  wishList: WishListType | undefined;
}) {
  if (!wishList) return <p>장바구니가 비었습니다.</p>;

  const [selectedItems, setSelectedItems] = useState<ObjectId[]>([]);

  const toggleItemSelection = (id: ObjectId) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems(wishList.item.map((item) => item._id!) || []);
    } else {
      setSelectedItems([]);
    }
  };

  console.log(selectedItems);
  return (
    <section className={styles.wishListFrame}>
      <h1 className={styles.wishListTitle}>Shopping Bag</h1>
      <div>
        <input
          type="checkbox"
          onChange={(e) => toggleSelectAll(e.target.checked)}
          checked={wishList && wishList.item.length === selectedItems.length}
        />
      </div>
      <section className={styles.wishListItems}>
        {wishList.item.map((wishItem) => {
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
