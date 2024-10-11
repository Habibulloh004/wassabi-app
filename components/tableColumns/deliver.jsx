/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { DataTableColumnHeader } from "../shared/dataTableColumnHeader";

export const deliver = [
  {
    accessorKey: "sort",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Сортировать:" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="по статусу" />
    ),
  },
  {
    accessorKey: "num_order",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="по числу заказов" />
    ),
  },
  {
    accessorKey: "average_bill",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="по среднему чеку" />
    ),
  },
  {
    accessorKey: "amount_order",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="по сумме заказа" />
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="по дате регистрации" />
    ),
  },
];
