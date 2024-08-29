import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 1000, // 1 seconds timeout
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Modify config before the request is sent
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login
    }
    return Promise.reject(error);
  }
);

export default apiClient;
