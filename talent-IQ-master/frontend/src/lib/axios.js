import axios from "axios";
import { getAuth } from "@clerk/clerk-react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Add Clerk token interceptor - THIS IS CRITICAL
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const { getToken } = getAuth();
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Failed to get Clerk token:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;