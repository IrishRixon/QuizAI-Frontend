interface ButtonProps {
  txt: string;
}

function Button(props: ButtonProps) {
  return (
    <button className="px-8 py-4 text-(--text-color) relative border-2 border-(--secondary-color) rounded-sm w-[178px] text-xl text-center whitespace-nowrap hover:bg-(--secondary-color) active:bg-(--secondary-color) transition">
      {props.txt}
    </button>
  );
}

export default Button;
