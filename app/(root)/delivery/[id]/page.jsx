import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const OrderItem = ({ params }) => {
  const { id } = params;

  return (
    <Container className="flex flex-col max-w-[500px] mx-auto w-11/12 justify-center items-center mt-24 mb-40 ">
      <section className="w-full space-y-3">
        <div className="flex justify-start items-center gap-2">
          <Link href="/delivery">
            <ChevronLeft className="text-primary border rounded-md"/>
          </Link>
          <h1 className="font-bold text-xl text-primary text-start">
            Заказ № 201
          </h1>
        </div>
        <div className="space-y-3">
          <ul className="space-y-3">
            <li className="w-full flex justify-between items-center gap-2 py-2 border-b-[1px] border-input">
              <span className="w-[50%] text-start font-medium text-sm text-thin">
                Время доставки:
              </span>
              <span className="w-[50%] text-end font-medium text-sm">
                16:30
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm text-thin">
                Клиент:
              </span>
              <span className="w-[50%] text-end font-medium text-sm">
                +99899 999-99-99 Юнусов Шоислом
              </span>
            </li>
            <li className="w-full flex justify-between items-center gap-2">
              <span className="w-[50%] text-start font-medium text-sm text-thin">
                Адрес:
              </span>
              <span className="w-[50%] text-end font-medium text-sm">
                Яшнабадский рн. ул. Боткина дом 5
              </span>
            </li>
          </ul>
          <div className="w-full flex justify-end">
            <Button className="border rounded-xl bg-white shadow-sm text-primary">
              Открыть адрес в навигаторе
            </Button>
          </div>
        </div>
        <h1 className="text-start font-medium text-sm text-thin">Чек:</h1>
        <section className="p-3 rounded-xl shadow-sm bg-white">
          <table className="w-full table-auto rounded-md">
            <thead className="border-0">
              <tr>
                <th className="text-thin px-2 textSmall1 py-1 text-left">
                  Наименование
                </th>
                <th className="text-thin px-2 textSmall1 py-1 text-left">
                  Кол-во
                </th>
                <th className="text-thin px-2 textSmall1 py-1 text-left">
                  Цена
                </th>
                <th className="text-thin px-2 textSmall1 py-1 text-left">
                  Итого
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-2 textSmall1 py-1 text-thin">Флорида</td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">5</td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">
                  30 000 сум
                </td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">
                  150 000 сум
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 textSmall1 py-1 text-thin">Флорида</td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">5</td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">
                  30 000 сум
                </td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">
                  150 000 сум
                </td>
              </tr>
              <tr>
                <td className="px-2 textSmall1 py-1 text-thin">Флорида</td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">5</td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">
                  30 000 сум
                </td>
                <td className="px-2 textSmall1 py-1 text-thin-secondary">
                  150 000 сум
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="w-full flex justify-end">
          <Button className="border rounded-xl bg-white shadow-sm text-primary space-x-2">
            <Check /> <span> Подтвердить доставку</span>
          </Button>
        </div>
      </section>
    </Container>
  );
};
export default OrderItem;
