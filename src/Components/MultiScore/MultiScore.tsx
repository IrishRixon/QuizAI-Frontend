import { Button } from "primereact/button";
import React from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import FooterButton from "../GeneralBtn/FooterButton";
import ButtonTransparent from "../GeneralBtn/Button";

function MultiScore() {
  const navigate = useNavigate();

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
              () => {}
              //   navigate("/viewAnswers", { state: { questions: questions } })
            }
          />
        </div>

        <ConfettiExplosion />
        <p className="text-(--white-text)">Your score is: </p>
        <h1 className="text-5xl text-(--white-text)">
          {/* {score}/{categoriesSelected.numberOfQuestions} */}
          10/10
        </h1>
      </div>

      <article className="w-full grow mt-8 flex flex-col gap-4 overflow-y-auto">
        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />

          <p className="text-xl">9/10</p>
        </div>
      </article>

      <footer className="w-full flex flex-col gap-4">
        <FooterButton
          label="Return to room"
          handleClick={() => {}}
          boolRef={false}
        />
        <ButtonTransparent label="Quit" className="text-md" handleClicked={() => {}} />
      </footer>
    </main>
  );
}

export default MultiScore;
