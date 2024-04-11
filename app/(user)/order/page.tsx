"use client";

import OrderList from "@/app/components/user/order/OrderList";
import Payment from "@/app/components/user/order/Payment";
import UserInfo from "@/app/components/user/order/UserInfo";
import { getOrderList } from "@/app/lib/actions/userAction/order.actions";
import { flex } from "@/app/style/common/common.css";
import { UserType } from "@/app/types/UserType";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function order() {
  const [userInfo, setUserInfo] = useState<UserType>({});
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const user = await getOrderList();
      if (!user || !user.orderInProgress) router.push("/");
      else setUserInfo(user);
    })();
  }, []);

  if (!userInfo || !userInfo.orderInProgress) return <></>;

  return (
    <section
      className={flex({
        align: "center",
        justify: "center",
        direction: "col",
      })}>
      <OrderList orderList={userInfo.orderInProgress} />
      <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
      <Payment userInfo={userInfo} />
    </section>
  );
}
