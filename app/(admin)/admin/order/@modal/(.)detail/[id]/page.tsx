import OrderDetail from "@/app/components/admin/order/AdminOrderDetail";
import { getDetailPrepareShippingItem } from "@/app/lib/actions/adminAction/adminOrder.actions";
import { centerAbsolute } from "@/app/style/common/common.css";
interface UserOrderDetailProps {
  params: {
    id: string;
  };
}

export default async function UserOrderDetail({
  params,
}: UserOrderDetailProps) {
  const orders = await getDetailPrepareShippingItem(params.id);
  return <OrderDetail orders={orders} />;
}
