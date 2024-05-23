"use client";

import type { ShippingItemType } from "@/app/types/ItemType";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as styles from "./adminOrderedList.css";
import Link from "next/link";
import dayjs from "dayjs";

export default function AdminOrderedList({
  orders,
}: {
  orders: ShippingItemType[];
}) {
  const columnHelper = createColumnHelper<ShippingItemType>();
  const columns = [
    columnHelper.accessor("name", {
      header: "성함",
      size: 50,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("orderdDate", {
      header: "주문 날짜",
      maxSize: 80,
      cell: (info) => dayjs(info.getValue()).format("YYYY-MM-DD"),
    }),
    columnHelper.accessor("orderName", {
      header: "주문 내용",
      maxSize: 200,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
      header: "가격",
      maxSize: 100,
      cell: (info) => `${Number(info.getValue()).toLocaleString("ko-kr")}원`,
    }),
    columnHelper.accessor("address", {
      header: "주소",
      size: 250,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("addressDetail", {
      header: "상세 주소",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phone", {
      header: "전화 번호",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("trackingNumber", {
      header: "발송 상태",
      maxSize: 80,
      cell: (info) => (info.getValue() ? <p>발송 완료</p> : <p>발송 대기</p>),
    }),
    columnHelper.accessor("_id", {
      header: "",
      maxSize: 60,
      cell: (info) => (
        <Link href={`/admin/order/detail/${info.getValue()}`}>자세히 보기</Link>
      ),
    }),
  ];

  const table = useReactTable({
    data: orders,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ overflow: "scroll" }}>
      <table className={styles.tableStyle}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={styles.tableHeaderStyle}
                  style={assignInlineVars({ width: `${header.getSize()}px` })}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className={styles.tableBodyStyle}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
