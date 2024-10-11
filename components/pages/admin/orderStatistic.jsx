"use client";

import CardStatistic from "@/components/shared/cardStatistic";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@headlessui/react";
export default function OrderStatistic() {
  const getCoordinates = async (placeName) => {
    const apiKey = "3a1c9f57-aea9-4d3d-b566-816f722d2129"; // Replace with your API key
    const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${encodeURIComponent(placeName)}&lang=ru_RU&format=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data, "This is response");

      // Check if the response has the required properties
      if (
        data.response &&
        data.response.GeoObjectCollection &&
        data.response.GeoObjectCollection.featureMember &&
        data.response.GeoObjectCollection.featureMember.length > 0
      ) {
        const coordinates =
          data.response.GeoObjectCollection.featureMember[0].GeoObject.Point
            .pos;
        const [longitude, latitude] = coordinates.split(" ");

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        return { latitude, longitude };
      } else {
        console.error("No results found.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className="w-full grid grid-cols-4 gap-3">
      {/* <Button onClick={()=>  getCoordinates("Buxoro viloyati Peshku tumani 57")}>
        This is click
      </Button> */}
      <CardStatistic
        title={"Все заказы"}
        description="Все клиенты на сегодня"
        size={50}
        className="col-span-2 p-5 shadow-sm"
      />
      <CardStatistic
        title={"Клиентов сегодня"}
        description="Все клиенты на сегодня"
        size={50}
        className="col-span-2 p-5 shadow-sm"
      />
      <div className="col-span-4 grid grid-cols-3 gap-3 shadow-sm rounded-md">
        <CardStatistic
          title={"Клиентов сегодня"}
          description="Все клиенты на сегодня"
          size={50}
          className="col-span-1 p-5 shadow-sm"
        />
        <CardStatistic
          title={"Клиентов сегодня"}
          description="Все клиенты на сегодня"
          size={50}
          className="col-span-1 p-5 shadow-sm"
        />
        <CardStatistic
          title={"Клиентов сегодня"}
          description="Все клиенты на сегодня"
          size={50}
          className="col-span-1 p-5 shadow-sm"
        />
      </div>
    </div>
  );
}
