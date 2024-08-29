import apiClient from "@/api/apiClient";

export const getAllProducts = async (set: any) => {
  set(() => ({ loading: true }));
  try {
    const { data } = await apiClient.get("/products");
    set(() => ({ loading: false, products: data }));
  } catch (err) {
    set(() => ({ loading: false, data: [], error: err }));
  }
};
