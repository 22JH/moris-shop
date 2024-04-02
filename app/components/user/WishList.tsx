import { ItemType } from "@/app/types/ItemType";

export default function WishList({
  wishList,
}: {
  wishList: ItemType[] | undefined;
}) {
  if (!wishList) return <p>장바구니가 비었습니다.</p>;
  return (
    <>
      {wishList.map((wishItem) => {
        return <div>{wishItem.title}</div>;
      })}
    </>
  );
}
