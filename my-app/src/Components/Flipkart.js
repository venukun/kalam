import React, { useState } from "react";
import Product from "./Product";
import SelectProduct from "./SelectProduct";

function Flipkart() {
  const [cart, setCart] = useState({});
  const items = [
    { id: 1, name: "SmartTV" },
    { id: 2, name: "Washing Mechine" },
    { id: 3, name: "Fridge" },
  ];
  const myFun = (c) => {
    console.log(c);
    setCart(c);
  };
  return (
    <div>
      <SelectProduct name={cart.name} />
      {items.map((product) => (
        <Product key={product.id} product={product} onProduct={myFun} />
      ))}
    </div>
  );
}

export default Flipkart;
