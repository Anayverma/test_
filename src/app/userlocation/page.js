"use client";

import React, { useEffect, useState } from "react";

export default function UserLocation() {
  const [location, setLocation] = useState("");
  useEffect(() => {
    console.log("location file loaded");

    function getLocation() {
      if (typeof navigator !== "undefined" && navigator.geolocation != null) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      setLocation(`Your latitude is ${position.coords.latitude}, and longitude is ${position.coords.longitude}`);
    }

    getLocation();
  }, []); // Empty dependency array ensures useEffect runs only once

  return <div>{location!=""?location:"loading..."}</div>;
}
