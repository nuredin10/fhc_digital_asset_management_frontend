import axios from "axios";

const env = import.meta.env;
const instance = axios.create({
    baseURL: 'http://localhost:9000',
})

export default instance;
