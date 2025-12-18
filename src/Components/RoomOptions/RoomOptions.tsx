import React from "react";
import Button from "../GeneralBtn/Button";

function RoomOptions() {
  return (
    <div className="w-full h-full flex">
      <main className="flex flex-col justify-center items-center gap-4 grow">
        <Button txt={"Create Room"} handleClicked={() => {}}></Button>
        <Button txt={"Join Room"} handleClicked={() => {}}></Button>
      </main>
    </div>
  );
}

export default RoomOptions;
