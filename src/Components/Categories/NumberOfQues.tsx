
import Button from "./Button";
import { useNumberOfQuesSelection } from "./hooks/useNumberOfQuesSelection";



function NumberOfQues() {
    const { selection, selectedIndex, handleClicked} = useNumberOfQuesSelection();

  return (
    <>
      <p className="text-start mt-8 text-(--white-text) text-xl">
        Number of questions:
      </p>
      <div className="mt-4 flex justify-between">
        {selection.map((item, index) => {
           return <Button
            label={`${item}`}
            key={index}
            handleClicked={(index: number) => {handleClicked(index)}}
            index={index}
            selectedIndex={selectedIndex}
          ></Button>;
        })}
      </div>
    </>
  );
}

export default NumberOfQues;
