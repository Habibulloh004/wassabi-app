"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import AllOrderMap from "../pages/delivery/AllOrderMap";
import { motion, AnimatePresence } from "framer-motion";
// import LeafletMap from "../pages/delivery/LeafletMap";
import { ImExit } from "react-icons/im";
import { exitToast } from "@/lib/functions";

export default function Footer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <footer
      className={
        pathname.includes("delivery")
          ? "fixed justify-center items-center bottom-0 left-0 flex min-h-32 bg-secondary w-screen shadow-custom"
          : "hidden"
      }
    >
      <div className="relative w-full h-full">
        <AllOrderMap status="simple" height="150px" />
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-white/50">
          <div
            className="font-bold textSmall4 cursor-pointer"
            onClick={openDialog}
          >
            Открыть карту
          </div>
          <div onClick={exitToast} className="absolute right-3 bottom-3 p-3 bg-red-300 rounded-full flex justify-center items-center cursor-pointer">
            <ImExit className="text-2xl text-red-600 ml-1" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            as="div"
            className="relative z-[400]"
            onClose={closeDialog}
          >
            <div className="fixed inset-0 z-[300] bg-black/50 w-screen overflow-y-auto">
              <motion.div
                initial={{ y: "100%" }} // Start fully off the screen
                animate={{ y: 0 }} // Animate to its position
                exit={{ y: "100%" }} // When exiting, it should go back down
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                className="flex min-h-full items-end justify-center"
              >
                <DialogPanel className="w-full h-[calc(100vh-80px)] rounded-t-md bg-white shadow-lg flex justify-between flex-col">
                  <AllOrderMap height="400px" handleClose={closeDialog} />
                  {/* <LeafletMap /> */}
                </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </footer>
  );
}
