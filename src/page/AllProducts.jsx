import React, { useContext } from "react";
import { ProductContext } from "../context/Product";

function AllProducts() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
