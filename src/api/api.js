import axios from "axios";

export const DEV_CONSTANTS = {
  BASE_URL: "https://api.escuelajs.co/api/v1/"
};

const BASE_URL = DEV_CONSTANTS.BASE_URL;

export const API_URL = {
  login: BASE_URL + "auth/login",
  signup: BASE_URL + "users",
  products: BASE_URL + "products",
  categories: BASE_URL + "categories",
};

export const ECOM = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
})