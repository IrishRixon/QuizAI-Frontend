import { Ripple } from "primereact/ripple";

interface ButtonProps {
  label: string;
  className?: string;
  handleClicked: () => void;
}

function ButtonTransparent({ label, handleClicked, className = "text-xl" }: ButtonProps) {
  return (
    <button
      className={`px-8 py-4 text-(--text-color) relative border-2 border-(--secondary-color) rounded-sm text-center whitespace-nowrap hover:bg-(--secondary-color) active:bg-(--secondary-color) transition p-ripple w-full ${className}`}
      onClick={handleClicked}
    >
      {label}
      <Ripple />
    </button>
  );
}

export default ButtonTransparent;
