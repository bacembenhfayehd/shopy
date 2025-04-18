
import React, { useContext } from 'react'
import { ProductContext } from '../context/Product';
import { useParams } from 'react-router-dom';

function Productdetails() {
  const {id} = useParams();
  const {products} = useContext(ProductContext);

  const product = products.find((p) => p.id === parseInt(id))

  if(!product) return <p>Produit introuvable</p>
  return (
    <div><img src={product.image} alt="" />
    <h2>{product.name}</h2>
    <h3>{product.price}</h3></div>
  )
}

export default Productdetails