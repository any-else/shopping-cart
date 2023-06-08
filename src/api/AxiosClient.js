import axios from "axios";

// API
//tao instance axios
//axiosCLient tra moij nguoi cac phuong thuc http get, path, put, delete, post
const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

//Bộ đánh chặn của axios ==> kiểm tra trước khi đưa data lên server và ngược nó kiểm kết quả trả về
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.log("axiosClient - response error", error.response);
    const { config, status, data } = error.response; //loi server tra ve
    if (config.url === "/register" && status === 400) {
      throw new Error(data);
    }

    if (config.url === "/login" && status === 400) {
      throw new Error(data);
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
