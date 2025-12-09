import { Ripple } from "primereact/ripple";

interface Props {
  index: number;
  label: string;
  chosen: number;
  correctAns: number;
}

function ChoiceButton({ index, label, chosen, correctAns }: Props) {
  let color;

  if(correctAns === index) {
    color = "bg-green-800";
  }
  else if(chosen === index){
    color = "bg-red-900";
  }
  else {
    color = " ";
  }
  return (
    <button
      className={`p-ripple w-full border border-(--secondary-color) p-4 rounded ${color}`}
    >
      <p className="text-xl text-(--text-color) text-center">{label}</p>
      <Ripple />
    </button>
  );
}

export default ChoiceButton;
