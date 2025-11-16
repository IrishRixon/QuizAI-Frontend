import { Ripple } from "primereact/ripple";

interface Props {
  label: string;
  handleClick: () => void;
}

function Button({ label, handleClick }: Props) {
  return (
    <button className="h-[56px] w-[200px] flex p-4 text-(--text-color) border border-(--secondary-color) rounded justify-center p-ripple"
    onClick={handleClick}>
      {label}
      <Ripple />
    </button>
  );
}

export default Button;
