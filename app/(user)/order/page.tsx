import WishList from "@/app/components/user/WishList";
import { getWishList } from "@/app/lib/actions/userAction/whistList.action";

export default async function Orders() {
  const wishList = await getWishList();
  return (
    <div>
      <WishList wishList={wishList} />
    </div>
  );
}