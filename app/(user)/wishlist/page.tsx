import WishList from "@/app/components/user/wishlist/WishList";
import PaymentButton from "@/app/components/user/wishlist/PaymentButton";
import { getWishList } from "@/app/lib/actions/userAction/whistList.action";
import { centerPosition, flex, font } from "@/app/style/common/common.css";

export default async function wihstList() {
  const wishList = await getWishList();
  return (
    <section
      className={`${flex({
        justify: "center",
        align: "center",
        direction: "col",
      })} ${centerPosition()}`}>
      <h1 className={font({ size: "large" })}>Shopping Bag</h1>
      <WishList wishList={wishList} />
      <PaymentButton />
    </section>
  );
}
