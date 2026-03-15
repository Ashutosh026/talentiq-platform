import axios from "axios";

const rawBaseUrl = (import.meta.env.VITE_API_URL || "").trim().replace(/\/+$/, "");

const axiosInstance = axios.create({
  baseURL: rawBaseUrl,
  withCredentials: true,
});

export default axiosInstance;