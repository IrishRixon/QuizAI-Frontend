import type { CategoriesSelected } from "../Context/CategoryContext";

export interface RoomState {
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