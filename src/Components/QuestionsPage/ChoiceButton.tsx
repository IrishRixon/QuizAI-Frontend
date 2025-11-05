interface Props {
    index: number;
    label: string;
}

function ChoiceButton({index, label}: Props) {
  return (
    <button className="w-full border border-(--secondary-color) p-4 rounded">
      <p className="text-xl text-(--text-color) text-center">
        {label}
      </p>
    </button>
  );
}

export default ChoiceButton;
