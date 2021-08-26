import axios from "axios";

export const axiosCient = axios.create({
  // baseURL: "https://6008fb900a54690017fc2871.mockapi.io",
  baseURL: "http://localhost:5000/api/",
  headers: { "Content-Type": "application/json"},
});
export const axiosCient2 = axios.create({
  // baseURL: "https://6008fb900a54690017fc2871.mockapi.io",
  baseURL: "http://localhost:5000/api/",
  headers: { 
    "Content-Type": "multipart/form-data"
  },
});
