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
      className={`min-h-13 p-ripple w-full box-border! border border-(--secondary-color) rounded ${
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
