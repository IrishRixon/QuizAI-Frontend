import { useContext } from "react"
import { ScoreContext, type ScoreContextType } from "../../Context/ScoreContext"
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";
import ConfettiExplosion from 'react-confetti-explosion';

function Score() {
    const { score, setScore} = useContext(ScoreContext) as ScoreContextType;
    const { categoriesSelected } = useContext(CategoryContext) as StateCat;
    
  return (
    <main className="p-6 w-full h-full z-10 relative flex flex-col justify-center items-center">
      <ConfettiExplosion />
        <p className="text-(--white-text)">Your score is: </p>
        <h1 className="text-7xl text-(--white-text)">{score}/{categoriesSelected.numberOfQuestions}</h1>
    </main>
  )
}

export default Score
