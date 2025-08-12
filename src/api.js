import axios from "axios";

const api = axios.create({
  baseURL: "https://chill-movie-api.vercel.app", //"http://localhost:5000"
});

export default api;
