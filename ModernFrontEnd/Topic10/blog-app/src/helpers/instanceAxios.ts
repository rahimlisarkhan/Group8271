import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://blog-api-t6u0.onrender.com/",
});
