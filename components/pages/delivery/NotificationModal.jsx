"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useRef } from "react";

export default function NotificationModal() {
  const sheetRef = useRef(null);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close(); // Close the sheet when the button is clicked
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          data-count={12}
          className="flex p-2 rounded-full transition-all duration-300 ease-linear notf-cound relative text-white text-2xl"
        >
          <IoMdNotificationsOutline className="" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Уведомления</SheetTitle>
          <div className="flex justify-start items-start gap-3 flex-col">
            {[1, 2, 3, 4, 5].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50"
              >
                <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-secondary-foreground px-[10px]">
                  <div className="flex gap-2">
                    <div className="text-[#d65563] backdrop-blur-xl p-1 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-start">
                      <p className="text-black">Please try again</p>
                      <p className="text-gray-500">
                        This is the description part
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeSheet} // Add onClick to the button
                    className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
