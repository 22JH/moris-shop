"use client";

import usePopup from "@/app/lib/hooks/usePopup";
import Thumbnails from "./Thumbnails";
import * as styles from "./productDetailInfo.css";
import { ItemType } from "@/app/types/ItemType";
import { saveToWishlist } from "@/app/lib/utils/saveLocalStorage";
import { addWishList } from "@/app/lib/actions/userAction/whistList.action";

interface ProductThumbnailsProps {
  item: ItemType;
}

export default function ProductDetailInfo({ item }: ProductThumbnailsProps) {
  const { showPopup, renderPopup } = usePopup();
  const handleWishClick = async () => {
    saveToWishlist(item._id!.toString());
    addWishList(item._id!);
    showPopup(<p>장바구니에 추가했습니다.</p>, 2000);
  };
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
        <button onClick={() => handleWishClick()}>장바 구니</button>
        <button>구매 하기</button>
      </section>
      {renderPopup()}
    </section>
  );
}
