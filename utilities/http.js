import axios from "axios";
import constant from "./constant";

const http = axios.create({
    baseURL: constant.baseUrl,
    headers: {
        "Content-type": "application/json",
        "api-key": constant.key
    }
});

export default http;