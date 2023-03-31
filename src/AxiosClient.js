import axios from "axios";

const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default AxiosClient;
