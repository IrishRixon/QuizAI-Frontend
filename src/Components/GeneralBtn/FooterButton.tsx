import { Ripple } from "primereact/ripple";

interface Props {
  boolRef: boolean;
  isDisabled?: boolean;
  label: string;
  handleClick: () => void;
}

function FooterButton({
  label,
  boolRef,
  isDisabled = false,
  handleClick,
}: Props) {
  return (
    <button
      className={`px-8 py-4 w-full mt-4 rounded text-(--white-text) border border-(--accent-color) p-ripple ${
        !boolRef && "bg-(--accent-color)"
      }`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
      <Ripple />
    </button>
  );
}

export default FooterButton;
