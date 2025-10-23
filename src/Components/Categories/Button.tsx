interface ButtonProps {
    label: string;
}
function Button(props: ButtonProps) {
  return (
    <button className="w-[100px] h-[53px] rounded border border-(--secondary-color) text-(--text-color)">{props.label}</button>
  )
}

export default Button
