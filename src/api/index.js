import axios from "axios";

const token = localStorage.getItem('access_token')

const instanceApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`

    },
    timeout: 10000
});

export default instanceApi