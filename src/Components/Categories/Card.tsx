import { Ripple } from "primereact/ripple";
import { useContext, useState } from "react";
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";

interface CardProps {
  image: string;
  label: string;
  alt: string;
  canActive: boolean;
  emitValue: (label: string) => void;
}

function Card(props: CardProps) {
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  let [active, setActive] = useState(false);
  const alreadySelected = categoriesSelected.selectedCategories.includes(props.label);

  return (
    <button
      className={`p-ripple w-[100px] h-[85px] border border-(--secondary-color) rounded p-2 flex flex-col gap-4 items-center ${
        alreadySelected && "bg-(--secondary-color)"
      }`}
      onClick={() => {
        alreadySelected ? setActive(false) : setActive(props.canActive);
        props.emitValue(props.label);
      }}
    >
      <p className="text-(--text-color) text-center text-nowrap">
        {props.label}
      </p>
      <img className="w-[30px] h-[28px]" src={props.image} alt={props.alt} />
      <Ripple />
    </button>
  );
}

export default Card;
