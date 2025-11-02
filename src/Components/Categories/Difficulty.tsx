import { useContext } from "react";
import Button from "./Button";
import { useDifficultySelection } from "./hooks/useDifficultySelection";
import { CategoryContext } from "../../Context/CategoryContext";


function Difficulty() {
  const { selectedIndex, difficultyLvls, handleClicked } = useDifficultySelection();

  return (
    <>
      <p className="text-start mt-8 text-(--white-text) text-xl">
        Select difficulty:
      </p>
      <div className="mt-4 flex justify-between">
        {difficultyLvls.map((item, index) => {
          return (
            <Button
              label={item}
              index={index}
              key={index}
              selectedIndex={selectedIndex}
              handleClicked={(val: number) => {
                handleClicked(val);
              }}
            ></Button>
          );
        })}
      </div>
    </>
  );
}

export default Difficulty;
