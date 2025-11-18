import { useContext } from "react"
import { ScoreContext, type ScoreContextType } from "../../Context/ScoreContext"
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";
import ConfettiExplosion from 'react-confetti-explosion';
import Button from "./Button";
import { useNavigate } from "react-router";

function Score() {
    const { score} = useContext(ScoreContext) as ScoreContextType;
    const { categoriesSelected } = useContext(CategoryContext) as StateCat;
    const navigate = useNavigate();
    
  return (
    <main className="p-6 w-full h-full z-10 relative flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center">
      <ConfettiExplosion />
        <p className="text-(--white-text)">Your score is: </p>
        <h1 className="text-7xl text-(--white-text)">{score}/{categoriesSelected.numberOfQuestions}</h1>
      </div>
      
      <div className="flex flex-col gap-4">
      <Button label="Play Again" handleClick={() => navigate("/categories")}></Button>
      <Button label="Main Menu" handleClick={() => navigate("/")}></Button>
      </div>
        
    </main>
  )
}

export default Score
