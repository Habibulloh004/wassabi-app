"use client";
import React, { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { revalidatePath } from "@/lib/revalidate";
import { deleteIcon, editIcon } from "@/public/images";
import Image from "next/image";

const DeleteItem = ({ payment }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const deleteItem = async (payment) => {
    try {
      const response = await axios.delete(
        `/api/${
          pathname.split("/")[2].slice(6).toLowerCase().slice(0, 1) +
          pathname.split("/")[2].slice(6).slice(1)
        }`,
        {
          params: {
            id: payment.id,
          },
        }
      );
      if (response) {
        // Force refresh by navigating to the same page
        router.push(pathname);
      }

      setOpen(false); // Close dialog after successful deletion
    } catch (error) {
      console.error(error); // Handle any errors during deletion
    }
  };
  const handleDelete = () => {
    revalidatePath(
      `${
        pathname.split("/")[2].slice(6).toLowerCase().slice(0, 1) +
        pathname.split("/")[2].slice(6).slice(1)
      }`
    );
    const callFunction = deleteItem(payment);
    const filterData = changeTableData.filter((c) => +c.id !== +payment.id);
    setTableData(filterData);
    toast.promise(callFunction, {
      loading: "Данные удаляются...",
      success: <p>Данные успешно удалены!</p>,
      error: (
        <p>Произошла ошибка при удалении данных. Повторите попытку позже.</p>
      ),
    });
  };
  return (
    <Suspense>
      <div className="flex justify-end items-center gap-3">
        <Button className="bg-transparent">
          <Image src={editIcon} alt="edit" />
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className="bg-transparent"
        >
          <Image src={deleteIcon} alt="edit" />
        </Button>
      </div>

      <AlertDialog open={open} onOpenChange={setOpen} className="z-[9999]">
        <AlertDialogTrigger asChild>
          <Button className="hidden">Trigger</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="z-[1000]">
          <AlertDialogHeader>
            <AlertDialogTitle>Вы абсолютно уверены?</AlertDialogTitle>
            <AlertDialogDescription>
              Это действие нельзя отменить. Это навсегда удалит вашу учетную
              запись и ваши данные с наших серверов.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Отмена
            </AlertDialogCancel>

            <AlertDialogAction
              className="hover:bg-primary"
              onClick={handleDelete}
            >
              Продолжить
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Suspense>
  );
};

export default DeleteItem;
