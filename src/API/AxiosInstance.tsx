import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://quizai-backend-adzt.onrender.com',
    headers: {
        "Content-Type": "application/json"
    }
});
