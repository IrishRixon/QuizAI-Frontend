import { useState } from "react";

interface CardProps {
  image: string;
  label: string;
  alt: string;
  isActive: boolean;
  emitValue: (label: string, toggleActive: () => void) => void;
}

function Card(props: CardProps) {
  let [active, setActive] = useState(false);

  return (
    <button
      className={`w-[100px] h-[85px] border border-(--secondary-color) rounded p-2 flex flex-col gap-4 items-center ${
        active && "bg-(--secondary-color)"
      }`}
      onClick={() => {
        setActive(props.isActive);
        props.emitValue(props.label, () => {setActive(false)});
      }}
    >
      <p className="text-(--text-color) text-center text-nowrap">
        {props.label}
      </p>
      <img className="w-[30px] h-[28px]" src={props.image} alt={props.alt} />
    </button>
  );
}

export default Card;
