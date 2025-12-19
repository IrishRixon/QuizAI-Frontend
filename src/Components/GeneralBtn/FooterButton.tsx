import { Ripple } from "primereact/ripple";

interface Props {
  boolRef: boolean;
  isDisabled?: boolean;
  label: string;
  onClick: () => void;
}

function FooterButton({ label, boolRef, isDisabled = false, onClick }: Props) {
  return (
    <div>
      <button
        className={`h-[53px] w-full mt-4 rounded text-(--white-text) border border-(--accent-color) p-ripple ${
          !boolRef && "bg-(--accent-color)"
        }`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {label}
        <Ripple />
      </button>
    </div>
  );
}

export default FooterButton;
