import OrderDetail from "@/app/components/admin/order/AdminOrderDetail";
import { getDetailOrderedItems } from "@/app/lib/actions/adminAction/adminOrder.actions";
interface UserOrderDetailProps {
  params: {
    id: string;
  };
}

export default async function UserOrderDetail({
  params,
}: UserOrderDetailProps) {
  const orders = await getDetailOrderedItems(params.id);
  return <OrderDetail orders={orders} />;
}
