"use client";

import Script from "next/script";

export default function UserLocation() {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
      the location of your is thgysgyugyugug
    </div>
  );
}
