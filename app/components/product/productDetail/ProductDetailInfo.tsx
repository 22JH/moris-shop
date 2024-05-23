"use client";

import usePopup from "@/app/lib/hooks/usePopup";
import Thumbnails from "./Thumbnails";
import * as styles from "./productDetailInfo.css";
import { ItemType } from "@/app/types/ItemType";
import { addWishList } from "@/app/lib/actions/userAction/whistList.action";

interface ProductThumbnailsProps {
  item: ItemType;
}

export default function ProductDetailInfo({ item }: ProductThumbnailsProps) {
  const { showPopup, renderPopup } = usePopup();
  const handleWishClick = async () => {
    addWishList(item._id!);
    showPopup(<p>장바구니에 추가했습니다.</p>, 2000);
  };
  return (
    <>
      <section className={styles.productDetailInfoFrame}>
        <Thumbnails thumbnails={item.thumbnails} />
        <section className={styles.productInfo}>
          <h1 className={styles.itemNameStyle}>{item.title}</h1>
          <h2 className={styles.itemDescriptionStyle}>{item.description}</h2>
          <div>
            <span>₩{item.price.toLocaleString("ko-kr")}</span>
          </div>
        </section>
        {renderPopup()}
      </section>
      <section className={styles.buttonSection}>
        <button className={styles.buyButton}>구매 하기</button>
        <button className={styles.cartButton} onClick={() => handleWishClick()}>
          장바 구니
        </button>
      </section>
    </>
  );
}
