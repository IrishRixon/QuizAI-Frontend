export interface RoomState {
    roomID?: string;
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