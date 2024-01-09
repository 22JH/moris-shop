import { titleToUrl } from "@/app/lib/changeKrUrl";
import { ItemType } from "@/app/types/ItemType";
import Image from "next/image";
import Link from "next/link";

export default function ItemList({ items }: { items: ItemType[] }) {
  return (
    <div>
      {items.map((item) => {
        const url = titleToUrl(item.title);
        return (
          <Link
            href={`/product/${item.category}/${item._id}-${url}`}
            key={item.title}>
            <Image
              src={item?.thumbnails[0] as string}
              width="100"
              height="100"
              alt="thumbnail"
            />
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}원</p>
          </Link>
        );
      })}
    </div>
  );
}
