import { getAllProducts } from "@/services/productService";
import {
  ProductActions,
  ProductState,
  ProductType,
} from "@/types/product.types";
import { StateCreator } from "zustand";
import { create } from "zustand";

const productStore: StateCreator<ProductState & ProductActions, [], []> = (
  set
) => ({
  loading: false,
  products: [],
  error: null,
  fetchProducts: () => getAllProducts(set),
});

const useProductStore = create<ProductState & ProductActions>(productStore);

export default useProductStore;
