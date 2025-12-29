import React, { useContext, useState } from "react";
import BackButton from "../GeneralBtn/BackButton";
import { useNavigate } from "react-router";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import FooterButton from "../GeneralBtn/FooterButton";
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";
import { socket } from "../../socket";
import { ToastContext } from "../../Context/Toast";
import type { PlayerData } from "../../Interface/PlayerData";
import AvatarDialog from "./AvatarDialog";
import type { RoomState } from "../../Interface/RoomState";

function JoinRoom() {
    const toast = useContext(ToastContext);

    const playerName = localStorage.getItem('playerName') ?? "Newbie";
    const playerAvatar = localStorage.getItem('playerAvatar') ?? "/images/avatars/Avatar-1.png";

    const navigate = useNavigate();
    const [name, setName] = useState(playerName);
    const [avatar, setAvatar] = useState(playerAvatar);
    const [roomID, setRoomID] = useState<number>();
    const [visible, setVisible] = useState(false);
    const [roomState, setRoomState] = useState<RoomState>();

    const isInvalid = !roomID || name.length === 0;


    const playerData: PlayerData = { playerName: name, playerAvatar: avatar };

    

    return (
        <main className="h-full w-full p-6 relative z-10 flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
            <div className="flex justify-between">
                <BackButton
                    handleClick={() => {
                        navigate("/multiplayer");
                    }}
                />
                <Button
                    text
                    label="Create Room"
                    size="small"
                    pt={{
                        root: {
                            className:
                                "focus:shadow-none! bg-transparent! text-(--text-color)! border-none!"
                        },
                    }}
                />
            </div>

            <article className="flex flex-col gap-8 justify-center items-center grow">
                <section className="flex gap-4 w-full">
                    <div className="relative inline-block group cursor-pointer w-[64px] h-[64px] overflow-hidden rounded-full">
                        {/* Avatar */}
                        <Avatar
                            label="P"
                            size="xlarge"
                            shape="circle"
                            image={avatar}
                            pt={{
                                image: {
                                    className: "object-scale-down"
                                },
                            }}
                            className="transition-opacity duration-200 group-hover:opacity-60"
                        />
                        {/* Overlay */}
                        <button
                            className="w-[64px] absolute inset-0 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            aria-label="Change avatar"
                            onClick={() => setVisible(true)}
                        >
                            <span className="pi pi-pencil text-white text-xl" />
                            <Ripple />
                        </button>
                    </div>
                    <div className="grow">
                        <IconField iconPosition="right">
                            <InputIcon className="pi pi-pencil"> </InputIcon>
                            <InputText
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={(e) => {
                                    if (e.target.value === "") setName("Newbie");
                                    localStorage.setItem('playerName', name);
                                }}
                                pt={{
                                    root: {
                                        className:
                                            "bg-transparent! border-t-0! border-l-0! border-r-0! border-b-2! rounded-none! focus:shadow-none! w-full! font-[Bree-serif]! text-xl!"
                                    },
                                }}
                            />
                        </IconField>
                    </div>
                </section>

                <section className="w-full">
                    <InputNumber
                        placeholder="Enter Room ID"
                        useGrouping={false}
                        value={roomID}
                        onChange={(e) => { setRoomID(Number(e.value)) }}
                        pt={{
                            root: {
                                className: "w-full!"
                            },
                            input: {
                                root: {
                                    className: "bg-transparent! focus:shadow-none!"
                                }
                            }

                        }}
                    />

                    <FooterButton label="Join Room" handleClick={() => {
                        const roomIDstr = String(roomID);

                        socket.connect();
                          
                        socket.emit("join-room", { roomIDstr }, playerData, (res: {ok: boolean, detail: string, summary: string, roomState: RoomState}) => {
                            if (!res.ok) {
                                toast?.current?.show({
                                    severity: "error",
                                    summary: res.summary,
                                    detail: res.detail,
                                    life: 5000
                                });
                            } else {
                                const roomState = res.roomState;
                                console.log(roomState, "Join room");
                                
                                navigate("/multiplayer/room", { state: {roomState: roomState} });
                                toast?.current?.show({
                                    severity: "success",
                                    summary: "Joined Room",
                                    detail: "Successfully Joined",
                                    life: 5000
                                });
                            }
                        });


                    }} boolRef={isInvalid} isDisabled={isInvalid} />
                </section>
            </article>


            <AvatarDialog visible={visible} setVisible={(visible) => { setVisible(visible) }} setAvatar={(img) => { setAvatar(img) }} />
        </main>

    );
}

export default JoinRoom;
