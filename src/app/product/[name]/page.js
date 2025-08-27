import Image from 'next/image'
import React from 'react'

const Name = ({ image, name, price, description, features, cartegory, addToCart }) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
      />
      <p>{price}</p>
      <p>{cartegory}</p>
      <p>{description}</p>
      <table>
        <th>
          <tr>{}</tr>
        </th>
        <tbody>{features}</tbody>
      </table>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Name