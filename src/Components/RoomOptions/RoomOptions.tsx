import React from "react";
import ButtonTransparent from "../GeneralBtn/Button";

function RoomOptions() {
  return (
    <div className="w-full h-full flex sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      <main className="flex flex-col justify-center items-center gap-4 grow">
        <ButtonTransparent
          label={"Create Room"}
          handleClicked={() => {}}
        ></ButtonTransparent>
        <ButtonTransparent
          label={"Join Room"}
          handleClicked={() => {}}
        ></ButtonTransparent>
      </main>
    </div>
  );
}

export default RoomOptions;
