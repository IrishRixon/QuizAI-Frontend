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
import { useStoreQuestions } from "./hooks/useStoreQuestions";

interface Props {
  questions: Question[];
  isFromDB: boolean;
}

function WithQuestions({ questions, isFromDB }: Props) {
  const [selectedAns, setSelectedAns] = useState(-1);
  const navigate = useNavigate();

  const { currentQuestionIndex, timer, setCurrentQuestionIndex, setTimer } =
    useTimer(questions.length);

  const { setScore } = useContext(ScoreContext) as ScoreContextType;

  const isSubmitBtnDisabled = selectedAns == -1;

  if(!isFromDB) {
    useStoreQuestions(questions);
  }

  return (
    <main className="p-6 w-full h-full z-10 relative flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
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

        <section className="flex flex-col gap-2 overflow-y-auto pb-4">
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
        className={`h-[53px] w-full mt-4 rounded text-(--white-text) border border-(--accent-color) ${
          !isSubmitBtnDisabled && "bg-(--accent-color)"
        }`}
        disabled={isSubmitBtnDisabled}
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
              navigate("/score");
              return prev;
            }
            setSelectedAns(-1);
            setTimer(30);
            return updated;
          });
        }}
      >
        Submit
      </button>
    </main>
  );
}

export default WithQuestions;
