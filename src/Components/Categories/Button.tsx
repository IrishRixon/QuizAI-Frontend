interface ButtonProps {
  label: string;
  index: number;
  selectedIndex: number;
  handleClicked: (selectedIndex: number) => void;
}
function Button({ index, label, selectedIndex, handleClicked }: ButtonProps) {
  return (
    <button
      className={`w-[100px] h-[53px] rounded border border-(--secondary-color) text-(--text-color) ${
        index == selectedIndex && "bg-(--secondary-color)"
      }`}
      onClick={() => handleClicked(index)}
    >
      {label}
    </button>
  );
}

export default Button;
