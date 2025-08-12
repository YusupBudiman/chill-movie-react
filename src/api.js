import axios from "axios";

const api = axios.create({
  baseURL: "https://chill-movie-backend-production.up.railway.app",
  //"http://localhost:3000", // json-server port
});

export default api;
