import { io } from "socket.io-client";

// const URL = import.meta.env.PROD ? undefined : 'http://localhost:3000';
const URL = 'https://quizai-backend-9q17.onrender.com';

export const socket = io(URL, {
    autoConnect: false
});