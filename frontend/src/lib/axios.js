import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://rapidfit.vercel.app/",
  withCredentials: true,
});
