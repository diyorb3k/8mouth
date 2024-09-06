"use client";
import { ProductType } from "@/types/product.types";
import { FaShoppingCart } from 'react-icons/fa'; 
import "../App.scss/Productcart/productcart.scss";
import { useStore } from '@/store/store'; 
import Link from 'next/link'; 

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="datapro">
      <div className="product-card">
        <div className="product-image">
          <img src={product.images} alt={product.title} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <div className="product-price">
            <span className="price-value">${product.price}</span>
          </div>

          <Link href="/products/Cart">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              <FaShoppingCart /> Savatga
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
