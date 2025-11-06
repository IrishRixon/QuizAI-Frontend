import { useState } from "react";
import { useFetchQuestions } from "../Categories/hooks/useFetchQuestions";
import ChoiceButton from "./ChoiceButton";
import { useTimer } from "../Categories/hooks/useTimer";

function QuestionsPage() {

  const questions = useFetchQuestions();

  const [selectedAns, setSelectedAns] = useState(-1);
  const { currentQuestionIndex, timer } = useTimer(
    questions.length
  );
  

  if (questions.length === 0) {
    return (
      <>
        <main className="flex items-center justify-center p-6 w-full h-full z-10 relative text-center text-md text-(--text-color)">
          <div className="flex flex-col justify-center gap-6">
            <i className="pi pi-spin pi-cog" style={{ fontSize: "5rem" }}></i>
            <p>AI is generating questions...</p>
          </div>
        </main>
      </>
    );
  } else {
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
              {questions.length > currentQuestionIndex ? questions[currentQuestionIndex].question : ''}
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
          onClick={() => {}}
        >
          Submit
        </button>
      </main>
    );
  }
}

export default QuestionsPage;
