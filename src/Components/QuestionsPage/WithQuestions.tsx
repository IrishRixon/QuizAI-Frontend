import {
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import ChoiceButton from "./ChoiceButton";
import { useTimer } from "./hooks/useTimer";
import {
  ScoreContext,
  type ScoreContextType,
} from "../../Context/ScoreContext";
import { checkAnswer } from "../../Utils/utils";
import type { Question } from "../../Interface/Question";
import { useNavigate } from "react-router";
import { useStoreQuestions } from "./hooks/useStoreQuestions";
import ParticipantCard from "../ParticipantCard/ParticipantCard";
import LoadingDots from "../LoadingDots/LoadingDots";
import FooterButton from "../GeneralBtn/FooterButton";

interface Props {
  questions: Question[];
  isFromDB: boolean;
  changeChosen: (index: number, chosen: number) => void;
}

function WithQuestions({ questions, isFromDB, changeChosen }: Props) {
  const [selectedAns, setSelectedAns] = useState(-1);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  const {
    currentQuestionIndex,
    timer,
    setCurrentQuestionIndex,
    setTimer,
    timeRunOut,
  } = useTimer(questions.length);

  const { setScore } = useContext(ScoreContext) as ScoreContextType;

  const isSubmitBtnDisabled = selectedAns == -1;

  if (!isFromDB) {
    useStoreQuestions(questions);
  }

  useEffect(() => {
    if (timeRunOut) {
      navigate("/score", { state: { questions: questions } });
    }
  }, [timeRunOut]);

  return (
    <main className="w-full h-full relative flex flex-col">
      <div className="flex justify-end mb-6">
        <span className="text-(--white-text) text-xl justify-center flex items-center w-[50px] h-[50px] rounded-full bg-(--secondary-color)">
          {timer}
        </span>
      </div>

      <section className="grow min-h-[550px]">
        <div className="min-h-2/5 w-full rounded shadow-md bg-(--secondary-color) p-2.5 flex items-center justify-center">
          <p className="text-(--white-text) text-xl text-center">
            {questions.length > currentQuestionIndex
              ? questions[currentQuestionIndex].question
              : ""}
          </p>
        </div>

        <section className="flex flex-col gap-2 overflow-y-auto pb-4 max-h-3/5 pt-8">
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

      {!isAnswered && (
        <FooterButton
          boolRef={isSubmitBtnDisabled}
          isDisabled={isSubmitBtnDisabled}
          label="Submit"
          handleClick={() => {
            changeChosen(currentQuestionIndex, selectedAns);

            if (
              checkAnswer(selectedAns, questions[currentQuestionIndex].answer)
            ) {
              setScore((prev) => {
                const updated = prev + 1;
                return updated;
              });
            }

            setCurrentQuestionIndex((prev) => {
              const updated = prev + 1;

              if (updated >= questions.length) {
                setSelectedAns(-1);
                navigate("/score", { state: { questions: questions } });
                return prev;
              }
              setSelectedAns(-1);
              setTimer(30);
              return updated;
            });
          }}
        />
      )}

      {isAnswered && (
        <article className="mt-11 flex flex-col gap-4">
          <p className="text-(--white-text)">Participants: </p>

          <div className="flex justify-between items-center">
            <ParticipantCard
              image="\images\avatars\Avatar-1.png"
              playerName="Jiang He"
            />
            <div className="bg-green-600 h-[10px] w-[10px] rounded-full"></div>
          </div>

          <div className="flex justify-between items-center">
            <ParticipantCard
              image="\images\avatars\Avatar-2.png"
              playerName="Jiang He"
            />
            <div className="bg-green-600 h-[10px] w-[10px] rounded-full"></div>
          </div>

          <div className="flex justify-between items-center">
            <ParticipantCard
              image="\images\avatars\Avatar-3.png"
              playerName="Jiang He"
            />
            <LoadingDots />
          </div>
        </article>
      )}
    </main>
  );
}

export default WithQuestions;
