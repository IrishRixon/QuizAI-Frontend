import { Button } from "primereact/button";
import React from "react";
import { socket } from "../../socket";

interface Props {
  isReady: boolean;
  isHost: boolean;
  socketID: string;
  roomID: string;
}

function KickButton({ isReady, isHost, socketID, roomID }: Props) {
  return (
    <div className="flex gap-4 items-center">
      {isReady && (
        <div className="bg-green-600 h-[10px] w-[10px] rounded-full"></div>
      )}
      {isHost && (
        <Button
          icon="pi pi-times"
          rounded
          text
          severity="danger"
          aria-label="Kick"
          onClick={() => socket.emit("kick-player", roomID, socketID)}
          pt={{
            root: {
              className: "focus:shadow-none!",
            },
          }}
        />
      )}
    </div>
  );
}

export default KickButton;
