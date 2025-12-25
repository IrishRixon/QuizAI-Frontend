import React from "react";
import BackButton from "../GeneralBtn/BackButton";
import { useNavigate } from "react-router";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import FooterButton from "../GeneralBtn/FooterButton";

function JoinRoom() {
    const navigate = useNavigate();
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
                            image="/images/avatars/Avatar-1.png"
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
                            onClick={() => console.log("Change avatar")}
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
                                placeholder="Normal"
                                pt={{
                                    root: {
                                        className:
                                            "bg-transparent! border-t-0! border-l-0! border-r-0! border-b-2! rounded-none! focus:shadow-none! w-full!",
                                    },
                                }}
                            />
                        </IconField>
                    </div>
                </section>

                <section className="w-full">
                    <InputText
                        type="text"
                        placeholder="Enter Room ID"
                        pt={{
                            root: {
                                className:
                                    "bg-transparent! focus:shadow-none! w-full!",
                            },
                        }}
                    />

                    <FooterButton label="Join Room" handleClick={() => {}} boolRef={false}/>
                </section>
            </article>
        </main>
    );
}

export default JoinRoom;
