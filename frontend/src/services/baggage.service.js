import axios from "axios";

const baseUrl = "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

function generateBaggageList(data) {
  return apiClient.post("/generatebaggagelist", data);
}

export { generateBaggageList };
