// Cart.tsx
import React from 'react';
import { useStore } from '@/store/store'; // Import your combined store
import { ProductType } from "@/types/product.types";

const Cart: React.FC = () => {
  const { cart } = useStore(); // Get the cart from the store

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product: ProductType) => (
            <li key={product.id}>
              <span>{product.title}</span> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
