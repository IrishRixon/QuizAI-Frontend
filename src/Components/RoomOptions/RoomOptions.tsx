import React from "react";
import ButtonTransparent from "../GeneralBtn/Button";
import { useNavigate } from "react-router";

function RoomOptions() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      <main className="flex flex-col justify-center items-center gap-4 grow">
        <ButtonTransparent
          label={"Create Room"}
          handleClicked={() => { navigate('room') }}
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
