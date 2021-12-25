import axios from "axios";
import constant from "./constant";

const http = axios.create({ baseURL: constant.baseUrl });
export default http;