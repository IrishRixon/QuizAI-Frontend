import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL: 'https://quizai-backend-9q17.onrender.com',
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json"
    }
});
