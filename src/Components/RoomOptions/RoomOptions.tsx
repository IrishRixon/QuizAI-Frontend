import React from "react";
import ButtonTransparent from "../GeneralBtn/Button";
import { useNavigate } from "react-router";
import BackButton from "../GeneralBtn/BackButton";

function RoomOptions() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full p-6 flex sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      <main className="flex flex-col w-full">
        <div>
          <BackButton
            handleClick={() => {
              navigate("/");
            }}
          />
        </div>

        <article className="flex flex-col justify-center items-center gap-4 grow">
          <ButtonTransparent
            label={"Create Room"}
            handleClicked={() => {
              navigate("/multiplayer/categories");
            }}
          ></ButtonTransparent>
          <ButtonTransparent
            label={"Join Room"}
            handleClicked={() => {navigate("/multiplayer/joinroom")}}
          ></ButtonTransparent>
        </article>
      </main>
    </div>
  );
}

export default RoomOptions;
