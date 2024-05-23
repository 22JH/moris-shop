import type { ItemType } from "@/app/types/ItemType";
import * as styles from "./orderList.css";
import WishList from "../wishlist/WishList";
import Image from "next/image";
import Link from "next/link";
import { titleToUrl } from "@/app/lib/utils/changeKrUrl";
import { flex } from "@/app/style/common/common.css";

interface OrderListProps {
  orderList: ItemType[] | undefined;
}

export default function OrderList({ orderList }: OrderListProps) {
  return (
    <section className={styles.orderListFrame}>
      <h2 className={styles.orderListTitleFrame}>상품 목록</h2>
      {orderList?.map((item) => {
        const itemUrl = `/product/${item.category}/${item._id}-${titleToUrl(
          item.title
        )}
        }`;
        return (
          <>
            <Link
              href={itemUrl}
              className={styles.orderListItem}
              key={item._id!.toString()}
            >
              <Image
                src={item.thumbnails[0] as string}
                width="100"
                height="100"
                alt="thumnail"
              />
              <section className={styles.description}>
                <p>{item.title}</p>
                <p className={flex({ justify: "end", align: "end", flex: 1 })}>
                  ₩{item.price.toLocaleString("ko-kr")}
                </p>
              </section>
            </Link>
            {/* <hr className={styles.hrStyle} /> */}
          </>
        );
      })}
    </section>
  );
}
