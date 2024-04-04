import WishList from "@/app/components/user/wishlist/WishList";
import PaymentButton from "@/app/components/user/wishlist/payment/PaymentButton";
import { getWishList } from "@/app/lib/actions/userAction/whistList.action";

export default async function Orders() {
  const wishList = await getWishList();
  return (
    <>
      <WishList wishList={wishList} />
      <PaymentButton />
    </>
  );
}
