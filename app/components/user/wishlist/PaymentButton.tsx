"use client";

import { changeWihsListItemPending } from "@/app/lib/actions/userAction/whistList.action";
import useWishListStore from "@/app/store/wishList/wishListStore";
import Link from "next/link";

export default function PaymentButton() {
  const { selectedItems } = useWishListStore();

  const handlePayment = async () => {
    await changeWihsListItemPending(selectedItems);
  };
  return (
    <Link href="/order" onClick={() => handlePayment()}>
      결제 하기
    </Link>
  );
}
