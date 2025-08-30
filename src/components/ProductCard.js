import Image from 'next/image'
import React from 'react'

const ProductCard = ({ image, name, price, categpry, description, features, addCart }) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
      />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={addCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard