import CustomImage from "@/components/shared/customImage";
import React from "react";

export default function ProductDetail() {
  return (
    <main className="relative w-3/4 bg-white rounded-md p-10 grid grid-cols-2 gap-2">
      <section className="w-full space-y-3">
        <div className="space-y-2">
          <h1 className="font-bold textNormal4">Флорида CLASSIC</h1>
          <p className="textSmall2 font-medium text-thin-secondary">
            Нежный сливочный сыр, свежий огурец и благородный лосось. Воплощение
            всей тонкости и изящества вкуса в наилучшем своём исполнении в самом
            классическом ролле.
          </p>
        </div>
        <div>
          <h1 className="font-bold textNormal4">Ингредиенты:</h1>
          <ul className="space-y-2 text-thin-secondary textSmall2">
            <li>Лосось</li>
            <li>Сыр сливочный </li>
            <li>Огурец</li>
          </ul>
        </div>
      </section>
      <section className="w-full space-y-3 flex flex-col justify-start items-end">
        <div className="space-y-1 h-[28%] mb-2">
          <h1 className="font-bold textNormal4">100 000 сум</h1>
          <p className="textSmall2 font-medium text-thin-secondary">100 гр.</p>
        </div>
        <div>
          <div className="w-1/2 h-[70%] absolute bottom-0 right-0 pt-2 flex justify-end items-center">
            <CustomImage
              className={"w-full h-full rounded-sm overflow-hidden"}
              src="https://img.taste.com.au/lNnNoTvU/taste/2010/01/sushi-187034-1.jpg"
              alt={"img"}
            />
          </div>
        </div>
      </section>
      <section className="w-1/2"></section>
    </main>
  );
}
