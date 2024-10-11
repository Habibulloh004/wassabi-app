"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { createOrder } from "@/public/images";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Container from "./container";
import { usePathname } from "next/navigation";
import NavItems from "./navItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import Cookies from "js-cookie";
import NextTopLoader from "nextjs-toploader";
import DotInput from "./dot-input";
import NotificationModal from "../pages/delivery/NotificationModal";

export default function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [customColor, setCustomColor] = useState();

  useEffect(() => {
    const updateClock = () => {
      const current = new Date();
      const hours = String(current.getHours()).padStart(2, "0");
      const minutes = String(current.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (pathname.includes("/admin")) {
      setCustomColor("hsla(83, 83%, 32%, 1)");
    } else {
      setCustomColor("hsla(0, 0%, 100%, 1)");
    }
  }, [pathname]);

  return (
    <>
      <NextTopLoader
        color={customColor}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        template='<div class="bar" role="bar"><div class="peg"></div></div> <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={999999999}
        showAtBottom={false}
      />
      <main
        className={`${
          pathname.includes("/delivery")
            ? "bg-primary "
            : "bg-background border"
        } shadow-sm fixed top-0 left-0 w-full z-[400]`}
      >
        {/* Admin */}
        <Container
          className={`${
            pathname.includes("/delivery") ? "hidden" : "grid"
          } h-20 grid-cols-5 mx-auto`}
        >
          <div className="col-span-1 w-full h-full flex justify-center items-center border-r-2">
            <Link href="/admin" className="font-bold textNormal2">
              WASSABI DELIVERY
            </Link>
          </div>
          <div className="col-span-4 w-full h-full flex items-center justify-end xl:justify-between pl-4 gap-3">
            <NavItems />
            <div className="flex justify-end items-center gap-3">
              <Button className="rounded-md bg-white shadow-sm hover:bg-white text-primary font-medium flex justify-center items-center gap-2">
                <Image src={createOrder} alt={"create"} />
                Создать заказ
              </Button>
              <button className="p-2 rounded-full hover:bg-secondary-foreground transition-all duration-300 ease-linear">
                <IoMdNotificationsOutline className="text-gray-500 text-2xl" />
              </button>
              {/* <OrderDialog /> */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-[1000]">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="">
                    <button
                      className="flex justify-start items-center gap-2"
                      onClick={() => {
                        window.location.replace("/login");
                        Cookies.remove("role");
                      }}
                    >
                      <LogOut size={16} />
                      <h1>Log Out</h1>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Container>

        {/* Delivery */}
        <div
          className={`${
            pathname.includes("/admin")
              ? "hidden"
              : "flex justify-between items-center max-w-md"
          } h-20 mx-auto w-11/12`}
        >
          <Link
            href="/delivery"
            className="flex justify-start items-center gap-2"
          >
            <DotInput checked="checked" />
            <h1 className="text-md font-bold text-white">WASSABI DELIVERY</h1>
          </Link>
          <div className="flex justify-end items-center">
            <p className="text-2xl font-medium text-white">
              {time ? time : "00:00"}
            </p>
            <NotificationModal />
          </div>
        </div>
      </main>
    </>
  );
}
