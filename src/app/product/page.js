"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const products = async () => {
    const res = axios.get("http://localhost:5773/user/product");
    const token = res.data.token;
    localStorage.getItem(token);
  };

  return (
    <>
      <Navbar />
      <div>
        {products.map((product) => {
          <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Products;
