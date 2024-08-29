import { ProductType } from "@/types/product.types";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-5 basis-[30%] shadow-md rounded-lg">
      <img
        src={product.image} // To'g'ri manzil bilan rasm yuklanadi
        alt={product.title}
        className="w-full h-[300px] object-contain"
      />
      <h2 className="font-bold">{product.id}. {product.title}</h2>
      <p className="text-lg font-semibold">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
};

export default ProductCard;
