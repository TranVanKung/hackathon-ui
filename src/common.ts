import axios from "axios";
import { API_TIMEOUT } from "@/config/constant";

export const api = axios.create({
  baseURL: "https://localhost:3000",
  timeout: API_TIMEOUT,
});
