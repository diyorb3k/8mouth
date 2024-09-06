import create from 'zustand';
import { ProductType } from "@/types/product.types"; // Import your ProductType if needed

interface Store {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
}

export const useStore = create<Store>((set) => ({
  // Search functionality
  searchTerm: '',
  setSearchTerm: (term: string) => set({ searchTerm: term }),

  // Cart functionality
  cart: [],
  addToCart: (product: ProductType) =>
    set((state) => ({ cart: [...state.cart, product] })),
}));
