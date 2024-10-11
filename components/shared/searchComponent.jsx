import { searchIcon } from "@/public/images";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

export default function SearchComponent() {
  return (
    <div className="flex justify-start items-center gap-1 border-2 border-input rounded-lg shadow-sm bg-white">
      <div className="ml-2">
      <Image src={searchIcon} alt="search" className="w-8 h-8" />
      </div>
      <Input type="text" placeholder="Найти заказ" className="font-medium text-thin border-0 p-0 bg-transparent pr-2" />
    </div>
  );
}
