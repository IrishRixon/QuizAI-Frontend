import { Ripple } from "primereact/ripple";

interface ButtonProps {
  label: string;
  handleClicked: () => void;
}

function ButtonTransparent({ label, handleClicked }: ButtonProps) {
  return (
    <button
      className="px-8 py-4 text-(--text-color) relative border-2 border-(--secondary-color) rounded-sm text-xl text-center whitespace-nowrap hover:bg-(--secondary-color) active:bg-(--secondary-color) transition p-ripple w-full"
      onClick={handleClicked}
    >
      {label}
      <Ripple />
    </button>
  );
}

export default ButtonTransparent;
