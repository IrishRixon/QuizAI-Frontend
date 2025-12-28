import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Avatar } from "primereact/avatar";

const avatarsList = [
  "/images/avatars/Avatar-1.png",
  "/images/avatars/Avatar-2.png",
  "/images/avatars/Avatar-3.png",
  "/images/avatars/Avatar-4.png",
  "/images/avatars/Avatar-5.png",
  "/images/avatars/Avatar-6.png",
  "/images/avatars/Avatar-7.png",
  "/images/avatars/Avatar-8.png",
  "/images/avatars/Avatar-9.png",
  "/images/avatars/Avatar-10.png",
  "/images/avatars/Avatar-11.png",
  "/images/avatars/Avatar-12.png",
];

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    setAvatar: (img: string) => void;
}

function AvatarDialog({visible, setVisible, setAvatar}: Props) {

  return (
    <Dialog
      header="Select Avatar"
      visible={visible}
      style={{ maxWidth: "30vw", minWidth: "300px", maxHeight: "80vh" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <main className="flex flex-wrap gap-4 justify-center">
        {avatarsList.map((item) => {
          return (
            <button
              className="h-[64px] w-[64px] group hover:cursor-pointer"
              onClick={() => {
                localStorage.setItem("playerAvatar", item);
                setAvatar(item);
                setVisible(false);
              }}
            >
              <Avatar
                image={item}
                className="transition-opacity duration-200 group-hover:opacity-60"
                size="xlarge"
                shape="circle"
                pt={{
                  image: {
                    className: "object-scale-down",
                  },
                }}
              />
            </button>
          );
        })}
      </main>
    </Dialog>
  );
}

export default AvatarDialog;
