import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // json-server port
});

export default api;
