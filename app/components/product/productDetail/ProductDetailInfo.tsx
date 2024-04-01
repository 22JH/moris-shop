"use client";

import Thumbnails from "./Thumbnails";
import * as styles from "./productDetailInfo.css";
import { ItemType } from "@/app/types/ItemType";

interface ProductThumbnailsProps {
  item: ItemType;
}

export default function ProductDetailInfo({ item }: ProductThumbnailsProps) {
  return (
    <section className={styles.productDetailInfoFrame}>
      <Thumbnails thumbnails={item.thumbnails} />
      <section className={styles.productInfo}>
        <h1 className={styles.itemNameStyle}>{item.title}</h1>
        <h2 className={styles.itemDescriptionStyle}>{item.description}</h2>
        <div>
          <span>Price</span>
          <span>{item.price}</span>
        </div>
        <button>장바 구니</button>
        <button>구매 하기</button>
        <button>구매 하기</button>
      </section>
    </section>
  );
}
