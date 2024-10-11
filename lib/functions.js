"use client";

import { Check, CircleX, TriangleAlert } from "lucide-react";
import toast from "react-hot-toast";
import { IoMdNotificationsOutline } from "react-icons/io";
import Cookies from "js-cookie";

// Apply backdrop blur and block body scrolling and interaction
const applyWhiteBackground = () => {
  const backdrop = document.createElement("div");
  backdrop.classList.add("toast-backdrop");
  backdrop.setAttribute("id", "toast-backdrop");
  document.body.appendChild(backdrop);

  // Block body scrolling and interaction
  document.body.classList.add("body-blocked");
};

// Remove backdrop and restore body interaction
const removeWhiteBackground = () => {
  const backdrop = document.getElementById("toast-backdrop");
  if (backdrop) {
    document.body.removeChild(backdrop);
  }

  // Unblock body scrolling and interaction
  document.body.classList.remove("body-blocked");
};

const showNewOrderToast = () => {
  applyWhiteBackground();
  toast(
    (t) => (
      <main className="w-11/12 mx-auto flex gap-5 flex-col">
        <section className="space-y-6">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="font-bold text-primary text-xl">Новый заказ</h1>
              <p className="text-thin text-sm">Доступен новый заказ</p>
            </div>
            <button>
              <IoMdNotificationsOutline className="text-primary text-5xl" />
            </button>
          </div>
          <ul className="space-y-3">
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm">
                Номер заказа:
              </span>
              <span className="w-[50%] text-start font-medium text-sm">
                №201
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm">
                Сумма заказа:
              </span>
              <span className="w-[50%] text-start font-medium text-sm">
                106 000 сум
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm">
                Оплата:
              </span>
              <span className="w-[50%] text-start font-medium text-sm">
                Наличкой
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm">
                Оплата:
              </span>
              <span className="w-[50%] text-start font-medium text-sm text-red-500">
                Не оплачено
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm">
                Время доставки:
              </span>
              <span className="w-[50%] text-start font-medium text-sm">
                16:30
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm">
                Клиент:
              </span>
              <span className="w-[50%] text-start font-medium text-sm">
                +99899 999-99-99 Юнусов Шоислом
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm">
                Адрес:
              </span>
              <span className="w-[50%] text-start font-medium text-sm">
                Яшнабадский рн. ул. Боткина дом 5
              </span>
            </li>
          </ul>
        </section>
        <div className="flex justify-between items-center gap-3">
          <button
            className="w-full border rounded-md px-2 py-1 flex justify-start items-center gap-2 text-primary"
            onClick={() => console.log("Order Accepted")}
          >
            <Check />
            <span className="font-medium text-sm">Принять</span>
          </button>
          <button
            className="w-full border rounded-md px-2 py-1 flex justify-start items-center gap-2 text-red-500"
            onClick={() => {
              removeWhiteBackground();
              toast.dismiss(t.id);
            }}
          >
            <CircleX />
            <span className="font-medium text-sm">Отклонить</span>
          </button>
        </div>
      </main>
    ),
    {
      duration: Infinity,
      containerClassName: "w-full",
      style: {
        minWidth: "100%",
      },
    }
  );
};

const showErrorOrderToast = () => {
  applyWhiteBackground();
  toast(
    (t) => (
      <main className="w-11/12 mx-auto flex gap-5 flex-col">
        <div className="flex justify-between items-center w-full">
          <div className="space-y-2">
            <h1 className="font-medium text-red-500 text-md">
              Истекает время доставки заказа № 202
            </h1>
            <p className="text-thin text-sm">
              Внимание истекает время доставки, поторопитесь
            </p>
          </div>
          <button>
            <IoMdNotificationsOutline className="text-red-500 text-5xl" />
          </button>
        </div>
        <div className="flex justify-end items-center gap-3">
          <button
            className="border rounded-md px-2 py-1 flex justify-start items-center gap-2 text-red-500"
            onClick={() => {
              removeWhiteBackground();
              toast.dismiss(t.id);
            }}
          >
            <CircleX />
            <span className="font-medium text-sm">Подробно</span>
          </button>
        </div>
      </main>
    ),
    {
      duration: Infinity,
      containerClassName: "w-full",
      style: {
        minWidth: "100%",
      },
    }
  );
};
const exitToast = () => {
  applyWhiteBackground();
  toast(
    (t) => (
      <main className="w-11/12 mx-auto flex gap-5 flex-col">
        <div className="flex flex-col gap-2 justify-between items-center w-full">
          <div className="space-y-2">
            <h1 className="font-medium text-red-500 text-md">
              Вы уверены, что хотите выйти?
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <button
            className="border rounded-md px-2 py-1 flex justify-start items-center gap-2 text-primary"
            onClick={() => {
              toast.dismiss(t.id);
              Cookies.remove("role");
              window.location.replace("/login");
            }}
          >
            <Check />
            <span className="font-medium text-sm">Да</span>
          </button>
          <button
            className="border rounded-md px-2 py-1 flex justify-start items-center gap-2 text-red-500"
            onClick={() => {
              removeWhiteBackground();
              toast.dismiss(t.id);
            }}
          >
            <CircleX />
            <span className="font-medium text-sm">Нет</span>
          </button>
        </div>
      </main>
    ),
    {
      duration: Infinity,
      containerClassName: "w-full",
      style: {
        minWidth: "100%",
      },
    }
  );
};

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

export { exitToast, checkStatus, showErrorOrderToast, showNewOrderToast };
