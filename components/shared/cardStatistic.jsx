import React from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CardStatistic(props) {
  const { title, description, size, className } = props;
  return (
    <Card className={cn(className, "bg-white ")}>
      <CardContent className="gap-y-2 flex justify-between items-start">
        <div>
          <h1 className="font-bold textNormal4">{title}</h1>
          <p className="text-thin-secondary">{description}</p>
        </div>
        <h1 className="textBig3 font-midium">{size}</h1>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href={{ pathname: "/admin/orders/all", query: { status: "all" } }}
          className="flex justify-end items-center gap-2"
        >
          <h1 className="font-medium textSmall2">Перейти</h1>
          <ChevronRight className="text-gray-500" />
        </Link>
      </CardFooter>
    </Card>
  );
}
