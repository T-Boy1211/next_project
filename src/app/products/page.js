import React from 'react'
import ProductCard from '@/components/ProductCard'

const Products = () => {
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