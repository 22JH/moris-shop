import OrderedList from "@/app/components/user/mypage/OrderedList";
import { getOrderedItems } from "@/app/lib/actions/userAction/order.actions";

export default async function Ordered() {
  const orders = await getOrderedItems();
  console.log(orders![0].item);
  const a = await fetch("http://aaaas/asa/asdf").catch((err) =>
    console.error(err)
  );
  console.log(a);
  return (
    <>
      <OrderedList orders={orders} />
    </>
  );
}
