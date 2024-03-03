"use client";

// import { useEffect, useState } from "react";

// export default function Inventory() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       let data = await fetch("https://dummyjson.com/products");
//       data = await data.json();
//       console.log(data);
//       setProduct(data.products);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       {product.map((item) => (
//         <h3 key={item.id}>Name: {item.title}, Price: {item.price}</h3>
//       ))}
//     </div>
//   );
// }

// "use client";

import { useEffect, useState } from "react";

export default function Inventory() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h3 key={item.id}>
          Name: {item.title}, Price: {item.price}
        </h3>
      ))}
    </div>
  );
}
