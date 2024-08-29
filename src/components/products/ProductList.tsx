"use client";
import useProductStore from "@/store/productStore";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { loading, products, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {(error as Error) && <h3>{(error as Error).message}</h3>}
      {products.length > 0 && (
        <div className="flex flex-wrap gap-10 justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
