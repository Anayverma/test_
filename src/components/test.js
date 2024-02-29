import React from "react";
export function Component1() {
  return <main>hehehhe</main>;
}
export function Component2({ name = "dummy" }) {
  return (
    <main>
      <div>jnfjr {name}</div>
    </main>
  );
}
