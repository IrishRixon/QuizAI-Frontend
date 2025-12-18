import { useNavigate } from "react-router";
import BackButton from "../GeneralBtn/BackButton";
import { Ripple } from "primereact/ripple";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

function Room() {
  const navigate = useNavigate();

  return (
    <main className="h-full w-full p-6 relative z-10 flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      <header>
        <BackButton
          onClick={() => {
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
              className:"text-(--text-color) font-bold!",
            },
            root: {
              className:"focus:shadow-none! focus:ring focus:ring-(--secondary-color)!",
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

      <div className="flex gap-4 items-center mt-4">
        <Avatar
          label="P"
          size="xlarge"
          shape="circle"
          image="\images\avatars\Avatar-1.png"
          pt={{
            image: {
              className: "object-cover",
            },
          }}
        />

        <h3 className="text-(--white-text) mt-2">Zack Ford</h3>
      </div>

      <div className="flex justify-between mt-8">
        <p>Participants: </p>
        <p>5/10</p>
      </div>
    </main>
  );
}

export default Room;
