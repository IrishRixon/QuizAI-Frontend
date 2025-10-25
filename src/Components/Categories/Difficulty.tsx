import { useState } from "react";
import Button from "./Button";
import { useDifficultySelection } from "./hooks/useDifficultySelection";

// interface Props {
//     handleClicked: (label: string) => void;
// }

const difficultyLevel = [
    "Easy",
    "Medium",
    "Hard"
]

function Difficulty() {
    // const [selectedIndex, setSelectedIndex] = useState(-1);
    
    const { selectedIndex, handleClicked } = useDifficultySelection();
    console.log(selectedIndex, 'difficulty');
  return (
    
    <>
      <p className="text-start mt-8 text-(--white-text) text-xl">
            Select difficulty:
          </p>
          <div className="mt-4 flex justify-between">
            {difficultyLevel.map((item, index) => {
                return <Button label={item} index={index} key={index} selectedIndex={selectedIndex} handleClicked={(val: number) => {handleClicked(val)}}></Button>
            })}
          </div>
    </>
  )
}

export default Difficulty
