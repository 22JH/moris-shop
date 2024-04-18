"use client";

import OrderList from "@/app/components/user/order/OrderList";
import Payment from "@/app/components/user/order/Payment";
import UserInfo from "@/app/components/user/order/UserInfo";
import { getOrderInProgressList } from "@/app/lib/actions/userAction/order.actions";
import { flex } from "@/app/style/common/common.css";
import { UserType } from "@/app/types/UserType";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function order() {
  const [userInfo, setUserInfo] = useState<UserType>({});
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const user = await getOrderInProgressList();
      if (!user || !user.orderInProgress || user.orderInProgress.length === 0)
        router.push("/");
      else setUserInfo(user);
    })();
  }, []);
  if (!userInfo || !userInfo.orderInProgress) return <></>;

  return (
    <section
      className={flex({
        align: "center",
        justify: "between",
        direction: "row",
        wrap: "wrap",
      })}>
      <div
        style={assignInlineVars({
          flex: "1",
          minWidth: "350px",
        })}>
        <OrderList orderList={userInfo.orderInProgress} />
        <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
      </div>
      <Payment userInfo={userInfo} />
    </section>
  );
}
