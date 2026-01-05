import type { CategoriesSelected } from "../Context/CategoryContext";
import type { Question } from "./Question";

export interface RoomState {
    gameStarted: boolean;
    timer: number;
    questions: Question[];
    questionIndex: number;
    categoriesSelected: CategoriesSelected;
    roomID: string;
    host: PlayerInRoom;
    players: PlayerInRoom[];
    
}

export interface PlayerInRoom {
    socketID: string;
    playerName: string;
    playerAvatar: string;
    isReady: boolean;
    score: number;
}