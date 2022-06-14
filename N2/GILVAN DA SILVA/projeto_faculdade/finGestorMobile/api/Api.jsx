import axios from "axios";

const api = axios.create({
    baseURL: 'https://fingestorapi.herokuapp.com/api'
})

export default api