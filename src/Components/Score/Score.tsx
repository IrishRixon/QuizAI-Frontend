import { useContext } from "react";
import {
  ScoreContext,
  type ScoreContextType,
} from "../../Context/ScoreContext";
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";
import ConfettiExplosion from "react-confetti-explosion";
import CustomButton from "./Button";
import { useNavigate } from "react-router";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";

function Score() {
  const { score, setScore } = useContext(ScoreContext) as ScoreContextType;
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  const navigate = useNavigate();

  const playAgain = () => {
    navigate("/categories");
    setScore(0);
    setCategoriesSelected((prev) => {
      return { ...prev, selectedCategories: [] };
    });
  };
  return (
    <main className="p-6 w-full h-full z-10 relative flex flex-col justify-center items-center gap-16">
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute right-[-60px] top-0">
          <Button
            icon="pi pi-eye"
            tooltip="View answers"
            tooltipOptions={{ position: "right", appendTo: document.body }}
            rounded
            text
            severity="secondary"
            aria-label="Bookmark"
          />
        </div>
        <ConfettiExplosion />
        <p className="text-(--white-text)">Your score is: </p>
        <h1 className="text-7xl text-(--white-text)">
          {score}/{categoriesSelected.numberOfQuestions}
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        <CustomButton
          label="Play Again"
          handleClick={() => playAgain()}
        ></CustomButton>
        <CustomButton
          label="Main Menu"
          handleClick={() => navigate("/")}
        ></CustomButton>
      </div>
    </main>
  );
}

export default Score;
