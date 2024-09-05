"use client";
import React, { useEffect, useState } from 'react';
import '../App.scss/Productlist/productlist.scss';
import { ProductType } from "@/types/product.types";
import ProductCard from './ProductCard'; // ProductCard komponentini import qilish
import { log } from 'console';
const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
// limn




// limk
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // API manzilingiz
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (error :any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  

    fetchProducts();
  }, []);
  // console.log(salom);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
     <div className='cartlar'>
     {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
     </div>
    </div>
  );
};

export default ProductList;
