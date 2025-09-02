"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5773/user/product");
        const data = res?.data?.response;
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error?.response?.data?.message || "Failed to fetch products");
        toast.error(error?.response?.data?.message || "Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
