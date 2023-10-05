import Axios from "axios";

const API_URL = "https://sistem-institucional-server.vercel.app"
export const axios = Axios.create({ baseURL: API_URL, withCredentials: true });