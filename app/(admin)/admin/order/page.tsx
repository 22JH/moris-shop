import AdminOrderedList from "@/app/components/admin/order/AdminOrderedList";
import { getPrepareShippingItems } from "@/app/lib/actions/adminAction/adminOrder.actions";
import { flex, boxSize } from "@/app/style/common/common.css";

export default async function Orders() {
  const orders = await getPrepareShippingItems();
  return (
    <section
      className={`${flex({ justify: "center" })} ${boxSize({
        width: "full",
      })}`}>
      <AdminOrderedList orders={orders} />
    </section>
  );
}
