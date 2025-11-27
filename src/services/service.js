import axios from "axios";
const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3600000,
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
API.interceptors.request.use((config) => {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  if (apiUrl) {
    config.baseURL = apiUrl
  }
  return config;
});
export default API;
/// special GET

