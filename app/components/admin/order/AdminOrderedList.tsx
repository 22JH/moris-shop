"use client";

import { flex } from "@/app/style/common/common.css";
import type { ShippingItemType } from "@/app/types/ItemType";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";

export default function AdminOrderedList({
  orders,
}: {
  orders: ShippingItemType[];
}) {
  const columnHelper = createColumnHelper<ShippingItemType>();
  const columns = [
    columnHelper.accessor("name", {
      header: "주문자 성함",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("orderName", {
      header: "주문 내용",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("amount", {
      header: "가격",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("address", {
      header: "주소",
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
      header: "운송장 번호",
      cell: (info) => (info.getValue() ? <p>발송 완료</p> : <p>발송 대기</p>),
    }),
    columnHelper.accessor("_id", {
      header: "",
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
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
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
                    <td key={cell.id}>
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
