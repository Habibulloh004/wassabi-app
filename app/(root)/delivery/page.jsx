import React from "react";
import Container from "@/components/shared/container";
import DeliveryCardOrder from "@/components/pages/delivery/cardOrder";
import { ordersData } from "@/lib/iterationDetails";
import { showErrorOrderToast, showNewOrderToast } from "@/lib/functions";
import Link from "next/link";

export default function DeliveryRoot() {
  const checkStatus = (status) => {
    switch (status) {
      case "expected":
        return "text-blue-600 bg-blue-100";
      case "completed":
        return "text-green-600 bg-green-100";
      case "progress":
        return "text-orange-600 bg-orange-100";
      case "delivered":
        return "text-indigo-600 bg-indigo-100";
      case "urgent":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <Container className="flex flex-col max-w-[500px] mx-auto w-11/12 justify-center items-center mt-[88px] mb-40">
      <div className="flex justify-between items-center gap-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={showNewOrderToast}
        >
          Show New Order
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={showErrorOrderToast}
        >
          Show Error Order
        </button>
      </div>
      <Link
        href="delivery/message"
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Messages
      </Link>
      <section className="flex flex-col w-full gap-4 mt-4">
        {ordersData.map((item, idx) => (
          <DeliveryCardOrder key={idx} data={item} />
        ))}
      </section>
    </Container>
  );
}
