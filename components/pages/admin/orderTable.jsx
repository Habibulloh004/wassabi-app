import { ordersData, statusData } from "@/lib/iterationDetails";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const TableHeader = ({ title, count, color, index, status }) => (
  <th
    className={`gap-2 cursor-pointer w-96 px-4 py-2 text-left text-foreground ${
      index !== 3 && "border-r-2"
    }`}
  >
    <Link
      href={{ pathname: "orders/all", query: { status } }}
      className="flex justify-between items-center gap-2"
    >
      <h1 className="flex justify-start items-center gap-2">
        {title}{" "}
        <span
          className={`w-6 h-6 flex justify-center items-center rounded-full text-${color}-600 bg-${color}-100 textSmall2`}
        >
          {count}
        </span>
      </h1>
      <ChevronRight className="text-gray-500" />
    </Link>
  </th>
);

const TableRow = ({ orderNumber, client, deliverer, branch }) => (
  <div className="w-96 px-4 py-2 text-left">
    <div className="p-4 rounded-md bg-white space-y-2">
      <article className="flex justify-between items-center gap-2">
        <h1 className="font-bold textNormal2">Заказ № {orderNumber}</h1>
        <ChevronRight className="text-gray-500" />
      </article>
      <ul className="textSmall1 space-y-2">
        <li className="text-thin-secondary grid grid-cols-3">
          <h1 className="col-span-1">Клиент:</h1>
          <span className="col-span-2">{client}</span>
        </li>
        <li className="text-thin-secondary grid grid-cols-3">
          <h1 className="col-span-1">Доставщик:</h1>
          <span className="col-span-2">{deliverer}</span>
        </li>
        <li className="text-thin-secondary grid grid-cols-3">
          <h1 className="col-span-1">Филиал:</h1>
          <span className="col-span-2">{branch}</span>
        </li>
      </ul>
    </div>
  </div>
);

export default function OrderTable() {
  const orderColors = {
    expected: "blue",
    progress: "orange",
    delivered: "indigo",
    completed: "green",
  };

  return (
    <main className="w-full h-full max-w-full overflow-scroll simple-scrollbar mt-10 pb-4">
      <div>
        <table>
          <thead>
            <tr>
              {statusData.map((item, idx) => (
                <TableHeader
                  index={idx}
                  key={item.status}
                  title={item.title}
                  count={
                    ordersData.filter((order) => order.status === item.status)
                      .length
                  }
                  color={orderColors[item.status]}
                  status={item.status}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {statusData.map((item, idx) => (
                <td
                  key={item.status}
                  className={`align-top ${idx !== 3 && "border-r-2"}`}
                >
                  {ordersData
                    .filter((order) => order.status === item.status)
                    .map((order) => (
                      <TableRow
                        key={order.id}
                        orderNumber={order.id}
                        client={order.client}
                        deliverer={order.deliverer}
                        branch={order.branch}
                      />
                    ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
