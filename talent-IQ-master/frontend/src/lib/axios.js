import axios from "axios";

function getApiBaseUrl() {
  const rawEnv = import.meta.env.VITE_API_URL || "";
  const normalized = rawEnv.replace(/^VITE_API_URL=/, "").trim().replace(/\/+$/, "");

  if (!normalized) return "/api";
  return normalized.endsWith("/api") ? normalized : `${normalized}/api`;
}

const axiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;
