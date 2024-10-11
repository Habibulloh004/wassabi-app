import React from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { statusData } from "@/lib/iterationDetails";

export default function DeliveryCardOrder(props) {
  const { className, data } = props;
  const { id, status, client, deliverer, branch, time } = data;
  const orderColors = {
    expected: "blue",
    progress: "orange",
    delivered: "indigo",
    completed: "green",
  };
  const color = orderColors[status];
  return (
    <Card className={cn(className, "bg-white w-full shadow-md")}>
      <CardHeader>
        <CardTitle>
          <Link href={`/delivery/${id}`} className="flex justify-between">
            <span className="textNormal4">Заказ №{id}</span>
            <ChevronRight className="text-gray-400" />
          </Link>
        </CardTitle>
        <CardDescription className="flex flex-col gap-2 text-thin-secondary">
          <div className="flex justify-between items-center textSmall2">
            <h1 className="w-1/2">Клиент :</h1>
            <p className="w-1/2 text-end">{client}</p>
          </div>
          <div className="flex justify-between items-center textSmall2">
            <h1 className="w-1/2">Адрес:</h1>
            <p className="w-1/2 text-end">Яшнабадский рн. ул. Боткина дом 5</p>
          </div>
          <div className="flex justify-between items-center textSmall2">
            <h1 className="w-1/2">Время доставки:</h1>
            <p className="w-1/2 text-end">{time}</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 justify-end items-center">
        <Button
          className={`h-0 py-4 hover:text-${color}-600 hover:bg-${color}-100 flex justify-center items-center rounded-full text-${color}-600 bg-${color}-100 text-[12px] font-bold`}
        >
          {statusData.find((item) => item.status === status).title}
        </Button>
      </CardContent>
    </Card>
  );
}
