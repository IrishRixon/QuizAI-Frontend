import { Ripple } from "primereact/ripple";

interface Props {
  index: number;
  label: string;
  selectedAns: number;
  handleClick: (index: number) => void;
}

function ChoiceButton({ index, label, handleClick, selectedAns }: Props) {
  return (
    <button
      className={`p-ripple w-full border border-(--secondary-color) p-4 rounded ${
        selectedAns === index && "bg-(--secondary-color)"
      }`}
      onClick={() => handleClick(index)}
    >
      <p className="text-xl text-(--text-color) text-center">{label}</p>
      <Ripple />
    </button>
  );
}

export default ChoiceButton;
