import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://quizai-backend-9q17.onrender.com',
    headers: {
        "Content-Type": "application/json"
    }
});