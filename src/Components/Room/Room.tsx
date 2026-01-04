import { useLocation, useNavigate, useParams } from "react-router";
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
import { ToastContext } from "../../Context/Toast";

function Room() {
  const location = useLocation();

  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  const toast = useContext(ToastContext);
  const navigate = useNavigate();

  const [dialogVisibility, setDialogVisibility] = useState(false);
  const [roomState, setRoomState] = useState<RoomState>();
  const [timer, setTimer] = useState(3);
  const [isHost, setIsHost] = useState(roomState?.host.socketID === socket.id);
  const { roomID, hostID } = useParams<{ roomID: string, hostID: string }>();

  const effectRef = useRef(false);

  useEffect(() => {
    if (effectRef.current) return;
    effectRef.current = true;

    toast?.current?.clear();
    
    socket.emit("get-room-state", roomID);

    socket.on("room-update", (room: RoomState) => {
      setRoomState(room);
      setCategoriesSelected((prev) => {
        return JSON.stringify(prev) === JSON.stringify(room.categoriesSelected)
          ? prev
          : room.categoriesSelected;
      });

      if (room.host.socketID === socket.id) {
        setIsHost(true);
      }
    });

    socket.on("game-start", () => {
      setTimer(3);

      toast?.current?.show({
        closable: false,
        summary: `Game Starts in: ${timer}`,
        severity: "success",
        sticky: true,
      });

      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            navigate(`/multiplayer/room/${roomID}/${hostID}/questions`);
            clearInterval(interval);
            toast?.current?.clear();
            return 0;
          }

          toast?.current?.replace({
            closable: false,
            severity: "success",
            sticky: true,
            summary: `Game Starts in: ${prev - 1}`,
          });

          return prev - 1;
        });
      }, 1000);
    });
  }, []);

  useEffect(() => {
    if (!roomState) return;
    if (socket.id !== roomState.host.socketID) return;

    socket.emit(
      "categoriesSelected-changed",
      roomState.roomID,
      categoriesSelected
    );
  }, [categoriesSelected]);

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
        <h3 className="text-(--white-text)">Room: {roomState?.roomID || " "}</h3>
        <Button
          icon="pi pi-copy"
          rounded
          text
          size="small"
          onClick={() => {
            navigator.clipboard.writeText(roomState?.roomID!);
            toast?.current?.show({
              severity: "success",
              summary: "Copied",
              detail: "Copied to Clipboard",
              life: 3000,
            });
          }}
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
            {`${roomState?.categoriesSelected.selectedCategories}, ${roomState?.categoriesSelected.difficulty}, ${roomState?.categoriesSelected.numberOfQuestions}`}
          </span>
        </h2>

        {isHost && (
          <Button
            label="Change"
            size="small"
            onClick={() => {
              setDialogVisibility(true);
            }}
            pt={{
              root: {
                className:
                  "focus:shadow-none! bg-(--text-color)! text-(--white-text)! border-none! min-w-[89px]",
              },
            }}
          />
        )}
      </section>

      <div className="flex mt-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <Avatar
            label="P"
            size="xlarge"
            shape="circle"
            image={roomState?.host.playerAvatar}
            pt={{
              image: {
                className: "object-scale-down"
              },
            }}
          />
          <h3 className="text-(--white-text) mt-2">
            {roomState?.host.playerName || ""}
          </h3>
        </div>

        {roomState?.host.isReady && (
          <div className="bg-green-600 h-[10px] w-[10px] rounded-full"></div>
        )}
      </div>

      <div className="flex justify-between mt-8 text-xl text-(--white-text)">
        <p>Participants: </p>
        <p>{roomState?.players.length || 0}/10</p>
      </div>

      <article className="mt-2 flex flex-col gap-4 grow overflow-y-auto">
        {roomState?.players.map((ele) => {
          if (ele.socketID === roomState?.host.socketID) return;

          return (
            <div className="flex justify-between items-center">
              <ParticipantCard
                playerName={ele.playerName}
                image={ele.playerAvatar}
              />
              <KickButton
                isReady={ele.isReady}
                isHost={isHost}
                socketID={ele.socketID}
                roomID={roomState?.roomID}
              />
            </div>
          );
        })}
      </article>

      <footer className="w-full">
        <FooterButton
          label={
            roomState?.players.find((ele) => {
              if (ele.socketID === socket.id) return ele.isReady;
            })
              ? "Not Ready"
              : "Ready"
          }
          handleClick={() => {
            socket.emit("toggle-ready", roomState?.roomID, socket.id);
          }}
          boolRef={
            roomState?.players.find((ele) => {
              if (ele.socketID === socket.id) return ele.isReady;
            })
              ? true
              : false
          }
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

export default Room;
