import React, { useContext } from "react";
import { ProductContext } from "../context/Product";
import { Link } from "react-router-dom";

function AllProducts() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to ={`/products/${product.id}`}>voir details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
