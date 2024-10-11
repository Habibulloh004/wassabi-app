import { Button } from "@/components/ui/button";
import {
  Map,
  YMaps,
  ObjectManager,
  Placemark,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function AllOrderMap({ status, height, handleClose }) {
  const apiKey = "3a1c9f57-aea9-4d3d-b566-816f722d2129";
  const [coordinates, setCoordinates] = useState([41.318414, 69.334156]); // Default marker coordinates
  const [locationAvailable, setLocationAvailable] = useState(false); // To check if location is available
  const [mapInstance, setMapInstance] = useState(null); // Store the map instance
  const router = useRouter(); // useRouter hook for navigation

  // Example branch data with IDs and coordinates
  const branches = [
    { id: 1, coords: [41.318414, 69.334156], name: "Sushi Order 1" },
    { id: 2, coords: [41.315258, 69.340883], name: "Sushi Order 2" },
    { id: 3, coords: [41.274788, 69.194206], name: "Sushi Order 3" },
  ];

  // Get user's location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setCoordinates(userCoordinates);
          setLocationAvailable(true);

          if (mapInstance) {
            mapInstance.setCenter(userCoordinates, 14); // Zoom to user's location
          }
        },
        () => {
          setLocationAvailable(false); // Handle error (location permission denied)
        }
      );
    } else {
      setLocationAvailable(false); // Geolocation is not supported
    }
  };

  // Set bounds to ensure all branches are visible
  const showBranches = () => {
    if (mapInstance) {
      const bounds = branches.map((branch) => branch.coords);
      mapInstance.setBounds(bounds, {
        checkZoomRange: true,
        zoomMargin: status === "simple" ? 100 : 190,
      });
    }
  };

  // Function to handle marker click and navigate to a new page
  const handleMarkerClick = (branchId) => {
    router.push(`/delivery/${branchId}`);
    handleClose();
  };

  return (
    <YMaps query={{ apikey: apiKey }}>
      <div
        className={`${status === "simple" && "hidden"} flex justify-center flex-col items-center gap-3 py-3`}
      >
        <h1>Карта заказов</h1>
        <div
          className={`${status === "simple" && "hidden"} flex justify-center items-center gap-3 mb-4`}
        >
          <Button className="hover:bg-primary" onClick={getUserLocation}>
            Determine Location
          </Button>

          <Button className="hover:bg-primary" onClick={showBranches}>
            Show Branches
          </Button>
        </div>
      </div>
      <Map
        defaultState={{
          center: coordinates,
          zoom: 13, // Default zoom level
        }}
        width="100%"
        minHeight={status === "simple" && height}
        height={status === "simple" ? "150px" : "100%"}
        instanceRef={(map) => setMapInstance(map)} // Store the map instance
      >
        {/* Render user's location marker if available */}
        {locationAvailable && (
          <Placemark
            geometry={coordinates}
            options={{
              iconLayout: "default#image",
              iconImageHref:
                "https://fkkpuaszmvpxjoqqmlzx.supabase.co/storage/v1/object/public/wassabi/DALL_E_2024-09-25_15.04.54_-_Create_a_location_pin_icon_similar_to_the_uploaded_image__with_a_design_tailored_for_couriers._The_pin_should_have_a_light_blue_color_with_a_simple__c-removebg-preview.png", // Ensure this path is correct
              iconImageSize: [70, 70], // Make sure these sizes are appropriate for your image
              iconImageOffset: [-35, -17.5], // Adjust if necessary
            }}
            properties={{
              balloonContent: "Your Location",
            }}
          />
        )}

        {/* Render branch markers */}
        {branches.map((branch) => (
          <Placemark
            key={branch.id}
            geometry={branch.coords}
            options={{
              iconLayout: "default#image",
              iconImageHref:
                "https://fkkpuaszmvpxjoqqmlzx.supabase.co/storage/v1/object/public/wassabi/wassabi-location.png", // Ensure this path is correct
              iconImageSize: [50, 50], // Make sure these sizes are appropriate for your image
              iconImageOffset: [-25, -15], // Adjust if necessary
            }}
            properties={{
              balloonContentHeader: branch.name,
              balloonContentBody: `<div>${branch.name}</div>`,
              hintContent: branch.name,
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            onClick={() => handleMarkerClick(branch.id)}
          />
        ))}
        <ZoomControl options={{ float: "right" }} />
      </Map>
    </YMaps>
  );
}

export default AllOrderMap;
