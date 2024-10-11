"use client";

import React, { useState } from "react";
import { Form } from "../ui/form";
import CustomFormField, { FormFieldType } from "../shared/customFormField";
import SubmitButton from "../shared/submitButton";
import { useForm } from "react-hook-form";
import { LoginValidate } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(LoginValidate),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      if (values.name === "admin") {
        Cookies.set(
          "role",
          JSON.stringify({
            role: "admin",
          })
        );
        window.location.replace("/admin");
      } else if (values.name === "delivery") {
        Cookies.set(
          "role",

          JSON.stringify({
            role: "delivery",
          })
        );
      }
      window.location.replace("/delivery");
    } catch (error) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : "Неправильное имя пользователя или пароль."
      );
      setIsLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[400px] max-sm:w-10/12 space-y-4 w-full bg-card rounded-md p-10"
      >
        <h1 className="text-center text-gray-700 textNormal3 font-semibold mb-5">
          Вход
        </h1>
        <div className="w-full space-y-6">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            placeholder="Логин"
          />
          <CustomFormField
            fieldType={FormFieldType.PASSWORDINPUT}
            control={form.control}
            name="password"
            placeholder="Пароль"
          />
        </div>
        <SubmitButton
          isLoading={isLoading}
          className="w-full bg-secondary hover:bg-secondary-foreground"
        >
          Войти
        </SubmitButton>
      </form>
    </Form>
  );
}
