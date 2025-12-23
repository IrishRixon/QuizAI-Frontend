import { useNavigate } from "react-router";
import BackButton from "../GeneralBtn/BackButton";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import KickButton from "./KickButton";
import FooterButton from "../GeneralBtn/FooterButton";
import { useEffect, useState } from "react";
import { socket } from "../../socket";

function Room() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <main className="h-full w-full p-6 relative z-10 flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      <header>
        <BackButton
          handleClick={() => {
            navigate("/multiplayer");
          }}
        />
      </header>

      <section className="flex gap-2 items-center mt-4">
        <h3 className="text-(--white-text)">Room: 64852</h3>
        <Button
          icon="pi pi-copy"
          rounded
          text
          size="small"
          pt={{
            icon: {
              className: "text-(--text-color) font-bold!",
            },
            root: {
              className:
                "focus:shadow-none! focus:ring focus:ring-(--secondary-color)!",
            },
          }}
        />
      </section>

      <section className="flex border rounded border-(--secondary-color) mt-4">
        <h2 className="text-sm grow p-1 flex items-center gap-2">
          <span className="text-[#9BA9C0]">Categories: </span>
          <span className="text-[#646D7A]"> Anime, Food, Music, Easy, 10</span>
        </h2>

        <Button
          label="Change"
          size="small"
          pt={{
            root: {
              className:
                "focus:shadow-none! bg-(--text-color)! text-(--white-text)! border-none!",
            },
          }}
        />
      </section>

      <div className="flex mt-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <Avatar
            label="P"
            size="xlarge"
            shape="circle"
            image="\images\avatars\Avatar-1.png"
            pt={{
              image: {
                className: "object-scale-down",
              },
            }}
          />
          <h3 className="text-(--white-text) mt-2">Zack Ford</h3>
        </div>

        {isReady && (
          <div className="bg-green-600 h-[10px] w-[10px] rounded-full"></div>
        )}
      </div>

      <div className="flex justify-between mt-8 text-xl text-(--white-text)">
        <p>Participants: </p>
        <p>5/10</p>
      </div>

      <article className="mt-2 flex flex-col gap-4 grow overflow-y-auto">
        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="Jiange He"
            image="\images\avatars\Avatar-2.png"
          />
          <KickButton />
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />
          <KickButton />
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="Old Jiang"
            image="\images\avatars\Avatar-4.png"
          />
          <KickButton />
        </div>

        <div className="flex justify-between items-center">
          <ParticipantCard
            playerName="White Crane"
            image="\images\avatars\Avatar-3.png"
          />
          <KickButton />
        </div>
      </article>

      <footer className="w-full">
        <FooterButton
          label={isReady ? "Not Ready" : "Ready"}
          handleClick={() => {
            setIsReady((prev) => {
              console.log(!prev);
              return !prev;
            });
          }}
          boolRef={isReady}
        />
      </footer>
    </main>
  );
}

export default Room;
