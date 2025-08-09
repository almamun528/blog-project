import axios from "axios";


const axiosInstance = axios.create({
//   baseURL: ""
  baseURL: "http://localhost:3001",

  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  optionSuccessStatus: 200,
});
export default axiosInstance;