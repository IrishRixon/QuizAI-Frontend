import { Navigate } from "react-router";
import { Ripple } from "primereact/ripple";

interface Props {
  handleClick: () => void;
}

function BackButton({ handleClick }: Props) {
  return (
    <button
      type="button"
      className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm p-ripple"
      onClick={handleClick}
    >
      <span
        className="material-symbols-rounded"
        style={{
          fontSize: "40px",
          color: "var(--text-color)",
          fontWeight: "400",
        }}
      >
        arrow_back
      </span>
      <Ripple />
    </button>
  );
}

export default BackButton;
