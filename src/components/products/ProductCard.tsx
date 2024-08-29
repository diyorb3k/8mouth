import { ProductType } from "@/types/product.types";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-5 basis-[30%] shadow-md rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full  h-[300px] object-contain"
      />
      {product.id}. {product.title}
    </div>
  );
};
export default ProductCard;
