import React from "react";

async function productList() {
  try {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
  } catch (error) {
    console.log("Error:", error);
  }
}

const Inventoryss = async () => {
  let product = await productList();
  console.log(product);
  return (
    <div>
      <h1>Product List</h1>
      {product.map((key) => (
        <h3 key={key.id}>
          Name={key.title} price={key.price}
        </h3>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div>
      {[...Array(1)].map((_, index) => (
        <Inventoryss key={index} />
      ))}
    </div>
  );
}
