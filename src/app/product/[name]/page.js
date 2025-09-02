'use client';

import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

const Name = ({
  image,
  name,
  price,
  description,
  features,
  category,
  addToCart,
}) => {
  useEffect(() => {
    const handleToken = async () => {
      const res = await axios.get("http://localhost:5773/product/:name");
      const token = await res.data.token;
    localStorage.getItem(token);
    token ? "" : "";
    }
    handleToken();
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
