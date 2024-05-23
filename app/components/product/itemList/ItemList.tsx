import * as styles from "./itemList.css";
import { titleToUrl } from "@/app/lib/utils/changeKrUrl";
import { ItemType } from "@/app/types/ItemType";
import Image from "next/image";
import Link from "next/link";

export default function ItemList({ items }: { items: ItemType[] }) {
  return (
    <section className={styles.itemsListFrame}>
      {items.map((item, idx) => {
        if (!item.soldOut || item.soldOut) {
          const _url = titleToUrl(item.title);
          return (
            <Link
              href={`/product/${item.category}/${item._id}-${_url}`}
              key={item.title + idx}
              className={styles.itemFrame}
            >
              <section className={styles.itemImage}>
                <Image
                  src={item?.thumbnails[0] as string}
                  fill
                  alt="thumbnail"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </section>
              <section className={styles.itemInfo}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <p className={styles.itemPrice}>
                  ₩{item.price.toLocaleString("ko-KR")}
                </p>
              </section>
            </Link>
          );
        }
      })}
    </section>
  );
}
