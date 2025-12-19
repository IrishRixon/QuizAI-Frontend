import { Avatar } from "primereact/avatar";

interface Props {
    playerName: string;
    image: string;
}

function ParticipantCard({playerName, image}: Props) {
  return (
    <div className="flex gap-4 items-center">
      <Avatar
        image={image}
        size="xlarge"
        pt={{
          image: {
            className: "object-scale-down",
          },
        }}
      />

      <p className="text-(--white-text)">{playerName}</p>
    </div>
  );
}

export default ParticipantCard;
