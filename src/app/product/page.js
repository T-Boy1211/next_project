'use client'

import React, { useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import axios from 'axios'

const Products = () => {
  const product = async () => {
    const res = axios.get('http://localhost:5773/user/product')
    const token = res.data.token
    localStorage.getItem(token)
  }
  
  const products = []
  return (
    <div>
      {products.map((product) => {
        return <ProductCard
          key={product.id}
          product={product}
        />;
      })}
    </div>
  );
}

export default Products 