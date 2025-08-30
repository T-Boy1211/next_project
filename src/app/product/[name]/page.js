import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

const Name = ({
  image,
  name,
  price,
  description,
  features,
  cartegory,
  addToCart,
}) => {
  useEffect(() => {
    const res = axios.get("http://localhost:5773/product/:name");
    const token = res.data.token;
    localStorage.getItem(token);
    token ? "" : "";
    return () => {
      second
    }
  }, [])

  return (
    <div>
      <Image src={image} alt={name} />
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
  );
};

export default Name;
