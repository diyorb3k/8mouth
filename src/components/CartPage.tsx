"use client";
import { useStore } from "@/store/store";
import Link from "next/link";

const CartPage = () => {
  const { cart } = useStore();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}

      <Link href="/">Continue Shopping</Link>
    </div>
  );
};

export default CartPage;
