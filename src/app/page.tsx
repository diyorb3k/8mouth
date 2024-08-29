import { ProductType } from "@/types/product.types";

// Misol mahsulot obyekti
const exampleProduct: ProductType = {
  id: 1,
  title: "Example Product 1",
  image: "/next.svg",
  price: 99.99,
  description: "This is an example product description.",
  category: "Electronics",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

const Hom = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <img src={product.image} alt="rasim" />
      {product.id}. {product.title}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Hom product={exampleProduct} />
    </div>
  );
};

export default Home;
