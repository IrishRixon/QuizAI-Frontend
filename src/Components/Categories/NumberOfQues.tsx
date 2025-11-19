import Button from "./Button";
import { useNumberOfQuesSelection } from "./hooks/useNumberOfQuesSelection";

function NumberOfQues() {
  const { selection, selectedIndex, handleClicked } =
    useNumberOfQuesSelection();

  return (
    <>
      <p className="text-start mt-8 mb-2 text-(--white-text) text-xl">
        Number of questions:
      </p>
      <div className=" flex justify-between gap-x-4">
        {selection.map((item, index) => {
          return (
            <Button
              label={`${item}`}
              key={index}
              handleClicked={(index: number) => {
                handleClicked(index);
              }}
              index={index}
              selectedIndex={selectedIndex}
            ></Button>
          );
        })}
      </div>
    </>
  );
}

export default NumberOfQues;
