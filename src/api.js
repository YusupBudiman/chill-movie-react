import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

console.log("🌐 MODE:", import.meta.env.MODE);
console.log("🌐 API baseURL:", import.meta.env.VITE_API_URL);

// Request Interceptor -> add token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: handle error global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: "Tidak ada koneksi ke server!" });
    }

    const { status, data } = error.response;
    const message = data?.message || "Terjadi kesalahan";

    console.error("API Error:", status, message);

    return Promise.reject({ status, message });
  }
);

export default api;
