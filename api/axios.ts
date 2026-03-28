import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.paraheights.com/edzy-api/hackathon",
  headers: {
    "Content-Type": "application/json",
  },
});