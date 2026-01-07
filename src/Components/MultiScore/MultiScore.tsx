import { Button } from "primereact/button";
import React, { useContext, useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate, useParams } from "react-router";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import FooterButton from "../GeneralBtn/FooterButton";
import ButtonTransparent from "../GeneralBtn/Button";
import { socket } from "../../socket";
import type { RoomState } from "../../Interface/RoomState";
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";

function MultiScore() {
  const navigate = useNavigate();
  const { roomID } = useParams<{ roomID: string }>();
  const [roomState, setRoomState] = useState<RoomState>();
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;

  useEffect(() => {
    socket.emit("get-room-state", roomID);

    socket.on("room-update", (roomState: RoomState) => {
      setRoomState(roomState);
      console.log(roomState, "multiScore");
    });
  }, []);

  return (
    <main className="p-6 w-full h-full z-10 relative flex flex-col justify-center items-center sm:px-28 md:px-40 lg:px-52 xl:px-[450px] overflow-y-auto">
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute right-[-60px] top-0">
          <Button
            icon="pi pi-eye"
            tooltip="View answers"
            tooltipOptions={{ position: "right", appendTo: document.body }}
            rounded
            text
            severity="secondary"
            aria-label="Bookmark"
            onClick={
              () => { }
              //   navigate("/viewAnswers", { state: { questions: questions } })
            }
          />
        </div>

        <ConfettiExplosion />
        <p className="text-(--white-text)">Your score is: </p>
        <h1 className="text-5xl text-(--white-text)">
          {roomState?.players.map((ele) => {
            return ele.socketID === socket.id ? ele.score : null;
          })}/{categoriesSelected.numberOfQuestions}
        </h1>
      </div>

      <article className="w-full grow mt-8 flex flex-col gap-4 overflow-y-auto">
        {roomState?.players.map((ele) => {
          if (ele.socketID !== socket.id) {
            return (
              <div className="flex justify-between items-center">
                <ParticipantCard
                  playerName={ele.playerName}
                  image={ele.playerAvatar}
                />

                <p className="text-xl">{ele.score}/{categoriesSelected.numberOfQuestions}</p>
              </div>
            )
          }
        })}
      </article>

      <footer className="w-full flex flex-col gap-4">
        {/* <FooterButton
          label="Return to room"
          handleClick={() => { }}
          boolRef={false}
        /> */}
        <ButtonTransparent
          label="Quit"
          className="text-md"
          handleClicked={() => { navigate("/multiplayer") }}
        />
      </footer>
    </main>
  );
}

export default MultiScore;
