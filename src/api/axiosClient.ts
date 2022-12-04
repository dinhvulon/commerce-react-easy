import axios, { AxiosRequestConfig } from "axios";

type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean
};

const axiosClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
  headers: {}
});
// Add a request interceptor
axiosClient.interceptors.request.use((config: IConfig) => {
  // Do something before request is sent
  return config;
}, async (error: any) => {
  // Do something with request error
  return await Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async function (error: any) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return await Promise.reject(error);
});

export { axiosClient };
