import Getelements from "@/components/pages/admin/getElements";
import Container from "@/components/shared/container";
import SearchComponent from "@/components/shared/searchComponent";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export default function Branches() {
  return (
    <Container
      className={"mt-32 flex flex-col gap-4 justify-start items-start mb-4"}
    >
      <section className="flex justify-between items-center gap-3 w-full">
        <h1 className="font-bold textNormal4">Филиалы</h1>
        <div className="flex justify-end items-center gap-3">
          <SearchComponent />
          <Button className="space-x-2 px-4 bg-white border-input border-2 py-1">
            <Plus size={20} className="text-primary" />
            <h1 className="text-primary font-medium">Добавить филиал</h1>
          </Button>
        </div>
      </section>
      <section className="w-full">
        <Getelements param="branches"/>
      </section>
    </Container>
  );
}
