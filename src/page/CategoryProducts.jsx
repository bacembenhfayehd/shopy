
import React, { useContext } from 'react'
import { ProductContext } from '../context/Product';
import { Link, useParams } from 'react-router-dom';

function CategoryProducts() {

  const {categoryName} = useParams();
  const {products} = useContext(ProductContext);

  const filtred = products.filter((p) => p.category.toLowerCase() === categoryName.toLocaleLowerCase())
  return (
    <div>
{filtred.map((product) => (
  <div>
    <img src={product.image} alt="" />
    <h3>{product.name}</h3>
    <p>{product.ptice}</p>
    <Link to ={`/products/${product.id}`}>voir details</Link>
    </div>
))}
    </div>
  )
}

export default CategoryProducts