import axiosInstance from "../lib/axios";

const withAuth = (token) => ({
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

export const sessionApi = {
  createSession: async (data, token) => {
    const response = await axiosInstance.post("/sessions", data, withAuth(token));
    return response.data;
  },

  getActiveSessions: async (token) => {
    const response = await axiosInstance.get("/sessions/active", withAuth(token));
    return response.data;
  },
  getMyRecentSessions: async (token) => {
    const response = await axiosInstance.get("/sessions/my-recent", withAuth(token));
    return response.data;
  },

  getSessionById: async (id, token) => {
    const response = await axiosInstance.get(`/sessions/${id}`, withAuth(token));
    return response.data;
  },

  joinSession: async (id, token) => {
    const response = await axiosInstance.post(`/sessions/${id}/join`, {}, withAuth(token));
    return response.data;
  },
  endSession: async (id, token) => {
    const response = await axiosInstance.post(`/sessions/${id}/end`, {}, withAuth(token));
    return response.data;
  },
  getStreamToken: async (token) => {
    const response = await axiosInstance.get(`/chat/token`, withAuth(token));
    return response.data;
  },
};
