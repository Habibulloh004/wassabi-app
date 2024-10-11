"use client"; // Bu direktivani qo'shing

import { useSearchParams } from "next/navigation";
import Container from "@/components/shared/container";
import React, { Suspense } from "react";
import NavOrder from "@/components/pages/admin/orderNav";
import { ordersData, statusData } from "@/lib/iterationDetails";
import { ChevronRight } from "lucide-react";
import { Button } from "@headlessui/react";

export default function AllOrders() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const filterOrder = ordersData.filter((c) => {
    if (status === "all") {
      return true;
    } else {
      return c.status === status;
    }
  });

  return (
    <Suspense>
      <Container className="gap-4 mt-32 mb-4 flex flex-col justify-start items-start">
        <h1 className="font-bold textNormal4 w-full text-start">Заказы</h1>
        <NavOrder status={status} />
        <main className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full gap-3">
          {filterOrder.map((item, idx) => (
            <div key={idx}>
              <OrderItem order={{ ...item, orderNumber: idx + 1 }} />
            </div>
          ))}
        </main>
      </Container>
    </Suspense>
  );
}

const OrderItem = ({ order }) => {
  const { orderNumber, client, deliverer, branch, status, time } = order;
  const orderColors = {
    expected: "blue",
    progress: "orange",
    delivered: "indigo",
    completed: "green",
  };
  const color = orderColors[status];
  return (
    <div className="p-4 rounded-md bg-white space-y-3">
      <div className="space-y-2">
        <article className="flex justify-between items-center gap-2">
          <h1 className="font-bold textNormal2">Заказ № {orderNumber}</h1>
          <ChevronRight className="text-gray-500" />
        </article>
        <ul className="textSmall1 space-y-2">
          <li className="text-thin-secondary grid grid-cols-3">
            <h1 className="col-span-1">Клиент:</h1>
            <span className="col-span-2 text-end">{client}</span>
          </li>
          <li className="text-thin-secondary grid grid-cols-3">
            <h1 className="col-span-1">Доставщик:</h1>
            <span className="col-span-2 text-end">{deliverer}</span>
          </li>
          <li className="text-thin-secondary grid grid-cols-3">
            <h1 className="col-span-1">Филиал:</h1>
            <span className="col-span-2 text-end">{branch}</span>
          </li>
          <li className="text-thin-secondary grid grid-cols-3">
            <h1 className="col-span-1">Время заказа::</h1>
            <span className="col-span-2 text-end">{time}</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-end">
        <Button
          className={`px-3 py-1 flex justify-center items-center rounded-full text-${color}-600 bg-${color}-100 textSmall1 font-bold`}
        >
          {statusData.find((item) => item.status === status).title}
        </Button>
      </div>
    </div>
  );
};
