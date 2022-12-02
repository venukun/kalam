import React from "react";

function Product(props) {
  const shoot = () => {
    if (props.onProduct) {
      props.onProduct(props.product);
    }
  };
  return (
    <div>
      <div>Home Needs</div>
      <button onClick={shoot}>{props.product.name}</button>
    </div>
  );
}

export default Product;
