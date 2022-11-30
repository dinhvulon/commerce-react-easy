import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost/api",
  timeout: 5000,
  headers: {}
});
