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
    color = "bg-green-800 border-green-800 text-shadow-red-200";
  }
  else if(chosen === index){
    color = "bg-red-900 border-red-900 text-shadow-red-200";
  }
  else {
    color = "text-(--text-color)";
  }
  return (
    <button
      className={`p-ripple w-full border border-(--secondary-color) p-4 rounded ${color}`}
    >
      <p className="text-xl text-center">{label}</p>
      <Ripple />
    </button>
  );
}

export default ChoiceButton;
