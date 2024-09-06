"use client";
import React, { useEffect, useState } from 'react';
import { ProductType } from "@/types/product.types";
import ProductCard from './ProductCard'; 
import '../App.scss/Productlist/productlist.scss';
import SearchInput from '../SearchInput';
import { useStore } from '@/store/store'; 

const ProductList: React.FC = () => {
  const { searchTerm } = useStore(); 
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products?.filter((product) =>
    searchTerm && product.title
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <div className="cartlar">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
