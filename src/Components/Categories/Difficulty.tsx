import Button from "./Button";
import { useDifficultySelection } from "./hooks/useDifficultySelection";

const difficultyLevel = ["Easy", "Medium", "Hard"];

function Difficulty() {
  const { selectedIndex, handleClicked } = useDifficultySelection();

  return (
    <>
      <p className="text-start mt-8 text-(--white-text) text-xl">
        Select difficulty:
      </p>
      <div className="mt-4 flex justify-between">
        {difficultyLevel.map((item, index) => {
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
