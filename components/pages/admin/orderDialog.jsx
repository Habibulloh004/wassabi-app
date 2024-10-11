"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { closeIcon, sendIcon } from "@/public/images";
import Link from "next/link";

export default function OrderDialog() {
  return (
    <div>
      <Dialog open={true}>
        <DialogContent className="min-w-[900px] ">
          <DialogHeader>
            <DialogTitle asChild>
              <h1 className="textNormal3 text-thin text-center">Заказ № 77</h1>
            </DialogTitle>
          </DialogHeader>
          <main className="grid grid-cols-5 gap-3">
            <OrderList />
            <OrderMap />
            <OrderCheck />
            <section className="col-span-5 flex justify-center items-center gap-2">
              <Button className="bg-white border-[1px] shadow-sm flex justify-start items-center gap-2 w-40">
                <Image src={sendIcon} alt="send" />
                <h1 className="textSmall2 text-primary font-bold">Отправить</h1>
              </Button>
              <Button className="bg-white border-[1px] shadow-sm flex justify-start items-center gap-2 w-40">
                <Image src={closeIcon} alt="send" />
                <h1 className="textSmall2 text-red-600 font-bold">Отмена</h1>
              </Button>
            </section>
          </main>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const OrderList = () => {
  const orderListData = [
    {
      id: 1,
      title: "Чек",
    },
    {
      id: 2,
      title: "Клиент",
    },
    {
      id: 3,
      title: "Акции",
    },
  ];
  const [activeTab, setActiveTab] = useState(1);
  const customComponent = (id) => {
    switch (id) {
      case 1:
        return <Check />;
      case 2:
        return <Client />;
      case 3:
        return <Actions />;
      default:
        return null;
    }
  };
  return (
    <main className="col-span-2 space-y-2">
      <section className="w-full flex items-center gap-6 shadow-custom rounded-md p-2">
        {orderListData.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`${
              activeTab === item.id ? "text-white" : "text-thin"
            } transition-all duration-300 ease-linear w-[33%] rounded-[6px] font-bold cursor-pointer relative py-1 flex justify-center items-center gap-[8px]`}
          >
            <h1 className="relative z-10 textSmall2">{item.title}</h1>
            {activeTab === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary rounded-[6px]"
              />
            )}
          </div>
        ))}
      </section>
      <section className="p-2 shadow-custom rounded-md">
        {customComponent(activeTab)}
      </section>
    </main>
  );
};

const Check = () => {
  return <main className="">Order check</main>;
};

const Client = () => {
  return <main className="">Order client</main>;
};

const Actions = () => {
  return <main className="">Order actions</main>;
};

const OrderMap = () => {
  return <main className="col-span-3">Order map</main>;
};
const OrderCheck = () => {
  return (
    <main className="col-span-5 shadow-custom p-4 rounded-md">
      <ul className="textSmall2 space-y-2">
        <li className="text-foreground flex justify-between items-center gap-3">
          <h1 className="col-span-1">Товар:</h1>
          <span className="col-span-2">1232</span>
        </li>
        <li className="text-foreground flex justify-between items-center gap-3">
          <h1 className="col-span-1">Акция:</h1>
          <span className="col-span-2">sadfsaf</span>
        </li>
        <li className="text-foreground flex justify-between items-center gap-3">
          <h1 className="col-span-1">Сумма доставки:</h1>
          <span className="col-span-2">asdfasdf</span>
        </li>
        <li className="font-bold text-foreground flex justify-between items-center gap-3">
          <h1 className="col-span-1">Сумма заказа:</h1>
          <span className="col-span-2">123123</span>
        </li>
      </ul>
    </main>
  );
};
