import { useNavigate } from "react-router";

interface ButtonProps {
  txt: string;
}

function Button(props: ButtonProps) {
    let navigate = useNavigate();

  return (
    <button className="px-8 py-4 text-(--text-color) relative border-2 border-(--secondary-color) rounded-sm w-[178px] text-xl text-center whitespace-nowrap hover:bg-(--secondary-color) active:bg-(--secondary-color) transition" 
    onClick={() => navigate("/categories")}>
      {props.txt}
    </button>
  );
}

export default Button;
