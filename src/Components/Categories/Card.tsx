interface CardProps {
    image: string;
    label: string;  
    alt: string;
}

function Card(props: CardProps) {
  return (
    <div className="w-[100px] h-[85px] border border-(--secondary-color) rounded p-2 flex flex-col gap-4 items-center">
      <p className="text-(--text-color) text-center text-nowrap">{props.label}</p>
      <img className="w-[30px] h-[28px]" src={props.image} alt={props.alt} />
    </div>
  )
}

export default Card
