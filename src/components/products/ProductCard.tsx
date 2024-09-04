  "use client";
  import { ProductType } from "@/types/product.types";
  import { FaShoppingCart } from 'react-icons/fa'; 
  import "../App.scss/Productcart/productcart.scss";

  type ProductCardProps = {
    product: ProductType;
  };

  const ProductCard = ({ product  }: ProductCardProps) => {
    return (
     <div className="datapro">
       <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <div className="product-price">
            <span className="price-value">${product.price}</span>
          </div>
          <button className="add-to-cart-button "><FaShoppingCart/> savatga</button>
        </div>
      </div>
     </div>
    );                                                      
  };

  export default ProductCard;
