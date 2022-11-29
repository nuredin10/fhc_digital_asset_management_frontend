import axios from "axios";

const env = import.meta.env;
console.log(env.VITE_SERVER_URL)
const instance = axios.create({
    baseURL: env.VITE_SERVER_URL,
})

export default instance;
