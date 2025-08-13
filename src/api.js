import axios from "axios";

const api = axios.create({
  baseURL: "https://chill-movie-backend-mongodb-production.up.railway.app/api",
});

export default api;
