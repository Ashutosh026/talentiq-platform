import axios from "axios";

function getApiBaseUrl() {
  const raw = (import.meta.env.VITE_API_URL || "").trim().replace(/\/+$/, "");

  if (!raw) return "/api";

  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

const axiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  withCredentials: true,
});

export default axiosInstance;