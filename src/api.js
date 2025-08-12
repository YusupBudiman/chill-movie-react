import axios from "axios";

const api = axios.create({
  baseURL: "https://chill-movie-backend-production.up.railway.app",
});

export default api;
