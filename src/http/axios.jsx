import axios from "axios";

const env = import.meta.env;
const instance = axios.create({
    baseURL: 'http://192.168.63.209:9000',
})

export default instance;