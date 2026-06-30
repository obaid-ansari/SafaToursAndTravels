import axios from "axios";

const api = axios.create({
  baseURL: "https://safatoursandtravels.vercel.app/api",
  withCredentials: true,
});

export const contactApi = (data) => {
  return api.post("/contact", data);
};

export const flightApi = (data) => {
  return api.post("/flight", data);
};

export const visaApi = (data) => {
  return api.post("/visa", data);
};

export const hotelApi = (data) => {
  return api.post("/hotel", data);
};

export const forexApi = (data) => {
  return api.post("/forex", data);
};
