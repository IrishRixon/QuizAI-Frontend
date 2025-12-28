import { useLocation, useNavigate } from "react-router";
import BackButton from "../GeneralBtn/BackButton";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import KickButton from "./KickButton";
import FooterButton from "../GeneralBtn/FooterButton";
import { useContext, useEffect, useRef, useState } from "react";
import { socket } from "../../socket";
import LoadingPage from "../LoadingPage/LoadingPage";
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";
import CategoriesDialog from "./CategoriesDialog";
import type { PlayerData } from "../../Interface/PlayerData";
import type { PlayerInRoom, RoomState } from "../../Interface/RoomState";

function Room() {
  const playerName = localStorage.getItem("playerName") ?? "Newbie";
  const playerAvatar =
    localStorage.getItem("playerAvatar") ?? "/images/avatars/Avatar-1.png";
  const location = useLocation();

  const { categoriesSelected } = useContext(CategoryContext) as StateCat;
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [roomID, setRoomID] = useState("");
  const [dialogVisibility, setDialogVisibility] = useState(false);
  const [hostID, setHostID] = useState("");

  const playerData: PlayerData = { playerName, playerAvatar, isReady };
  const [roomState, setRoomState] = useState<RoomState>(
    location.state?.roomState
  );

  const effectRef = useRef(false);

  useEffect(() => {

    if (effectRef.current) return;
    effectRef.current = true;

    socket.connect();
    socket.on("room-update", (room: RoomState) => {
      setRoomState(room);
    });

    console.log(roomState, "roomState");
    if (!roomState) {
      socket.emit(
        "create-room",
        playerData,
        (response: { ok: boolean, roomState: RoomState }) => {
          if (response.ok) {
            setRoomState(response.roomState);
            setHostID(socket.id!);
          }
        }
      );
    }

  }, []);

  if (!roomState) {
    return <LoadingPage text="Loading ..." />;
  } else {
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
          <h3 className="text-(--white-text)">Room: {roomState.roomID}</h3>
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

        <section className="flex border rounded border-(--secondary-color) mt-4 w-full">
          <h2 className="text-sm p-1 grow flex items-center gap-2">
            <span className="text-[#9BA9C0]">Categories: </span>
            <span className="text-[#646D7A] grow">
              {" "}
              {`${categoriesSelected.selectedCategories}, ${categoriesSelected.difficulty}, ${categoriesSelected.numberOfQuestions}`}
            </span>
          </h2>

          <Button
            label="Change"
            size="small"
            onClick={() => {
              setDialogVisibility(true);
            }}
            pt={{
              root: {
                className:
                  "focus:shadow-none! bg-(--text-color)! text-(--white-text)! border-none! min-w-[89px]"
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
              image={roomState.host.playerAvatar}
              pt={{
                image: {
                  className: "object-scale-down"
                },
              }}
            />
            <h3 className="text-(--white-text) mt-2">
              {roomState.host.playerName || ""}
            </h3>
          </div>

          {isReady && (
            <div className="bg-green-600 h-[10px] w-[10px] rounded-full"></div>
          )}
        </div>

        <div className="flex justify-between mt-8 text-xl text-(--white-text)">
          <p>Participants: </p>
          <p>{roomState.players.length || 0}/10</p>
        </div>

        <article className="mt-2 flex flex-col gap-4 grow overflow-y-auto">
          {roomState.players.map((ele) => {
            if(ele.socketID === roomState.host.socketID) return;

            return (<div className="flex justify-between items-center">
              <ParticipantCard
                playerName={ele.playerName}
                image={ele.playerAvatar}
              />
              <KickButton isReady={ele.isReady} isHost={socket.id === roomState.host.socketID}/>
            </div>)
          })}
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

        <CategoriesDialog
          visible={dialogVisibility}
          setVisible={(visible: boolean) => {
            setDialogVisibility(visible);
          }}
        />
      </main>
    );
  }
}

export default Room;
