"use client";
import React from "react";

import { Component2 } from "../../../components/test.js";

export default function NestedFunc({ params }) {
  const { nestedtest } = params;
  console.log(nestedtest);
  return (
    <main>
      <Component2 name={nestedtest} />
    </main>
  );
}
