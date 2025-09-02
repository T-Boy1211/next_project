
"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5773/product/${name}`);
        setProduct(res?.data?.response || null);
      } catch (err) {
        setError("Product not found or error fetching product.");
      } finally {
        setLoading(false);
      }
    };
    if (name) fetchProduct();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error || !product) return <div>{error || "Product not found."}</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <h1 className="text-2xl font-bold mt-4 mb-2">{product.name}</h1>
      <p className="text-lg text-green-600 font-semibold mb-2">${product.price}</p>
      <p className="mb-2">Category: {product.category}</p>
      <p className="mb-4">{product.description}</p>
      {product.features && Array.isArray(product.features) && (
        <table className="mb-4 w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Features</th>
            </tr>
          </thead>
          <tbody>
            {product.features.map((feature, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{feature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
