import axios, { AxiosInstance } from "axios";

const API: AxiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;
