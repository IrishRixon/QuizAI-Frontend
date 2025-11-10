import { useContext, useState } from "react";
import ChoiceButton from "./ChoiceButton";
import { useTimer } from "./hooks/useTimer";
import {
  ScoreContext,
  type ScoreContextType,
} from "../../Context/ScoreContext";
import { checkAnswer } from "../../Utils/checkAnswer";
import type { Question } from "../../Interface/Question";
import { useNavigate } from "react-router";

interface Props {
  questions: Question[];
}

function WithQuestions({ questions }: Props) {
  const [selectedAns, setSelectedAns] = useState(-1);
  const { currentQuestionIndex, timer, setCurrentQuestionIndex } = useTimer(
    questions.length
  );
  const { score, setScore } = useContext(ScoreContext) as ScoreContextType;
  const navigate = useNavigate();

  return (
    <main className="p-6 w-full h-full z-10 relative flex flex-col">
      <div className="flex justify-end mb-6">
        <span className="text-(--white-text) text-xl justify-center flex items-center w-[50px] h-[50px] rounded-full bg-(--secondary-color)">
          {timer}
        </span>
      </div>

      <section className="grow">
        <div className="h-[273px] w-full rounded shadow-md bg-(--secondary-color) p-2.5 flex items-center justify-center mb-9">
          <p className="text-(--white-text) text-xl text-center">
            {questions.length > currentQuestionIndex
              ? questions[currentQuestionIndex].question
              : ""}
          </p>
        </div>

        <section className="flex flex-col gap-2">
          {questions[currentQuestionIndex].choices.map((item, i) => {
            return (
              <ChoiceButton
                key={i}
                index={i}
                label={item}
                selectedAns={selectedAns}
                handleClick={(param) => setSelectedAns(param)}
              />
            );
          })}
        </section>
      </section>

      <button
        className="h-[53px] w-full bg-(--accent-color) rounded text-(--white-text)"
        onClick={() => {
          if (
            checkAnswer(selectedAns, questions[currentQuestionIndex].answer)
          ) {
            setScore((prev) => {
              const updated = prev + 1;
              console.log(updated);
              return updated;
            });
          }

          setCurrentQuestionIndex((prev) => {
            const updated = prev + 1;

            if (updated >= questions.length) {
              setSelectedAns(-1);
              return updated;
            }
            return prev;
          });
        }}
      >
        Submit
      </button>
    </main>
  );
}

export default WithQuestions;
