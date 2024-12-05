import axios from "axios";

// http://172.17.160.1:3333/create
export const api = axios.create({
    baseURL: "http://172.17.160.1:3333"
})