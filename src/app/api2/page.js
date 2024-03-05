"use client";

import { useState } from "react";


export default function Api2() {
    const [name, setName] = useState("");
    const PostRequest=async()=> {
      let resp = await fetch("http://localhost:3000/apiown/2", {
        method: "Post",
        body: JSON.stringify({name})});
      resp = await resp.json();
      console.log(resp)
      return;
    }
  return  (
  <div>
    <input
      type="text"
      value={name}
      placeholder="write something"
      onChange={(e) => setName(e.target.value)}
    />
    <button onClick={PostRequest}> ADD USER </button>
  </div>
  );
}
