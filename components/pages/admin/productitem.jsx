import { description } from "@/components/shared/chartComponent";
import CustomImage from "@/components/shared/customImage";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductItem(props) {
  const { description, title,href } = props;
  return (
    <main className="bg-white p-4 rounded-md shadow-sm space-y-2">
      <Link href={href} className="flex justify-between items-center gap-2">
        <h1 className="font-bold textNormal2">{title}</h1>
        <ChevronRight className="text-gray-500" />
      </Link>
      <p className="text-thin-secondary textSmall2">{description}</p>
      <div className="flex justify-end items-center">
        <CustomImage
        className={"w-24 h-24 rounded-sm overflow-hidden"}
          src="https://img.taste.com.au/lNnNoTvU/taste/2010/01/sushi-187034-1.jpg"
          alt={"img"}
        />
      </div>
    </main>
  );
}
