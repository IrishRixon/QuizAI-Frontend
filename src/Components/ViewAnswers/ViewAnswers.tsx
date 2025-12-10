import { Ripple } from "primereact/ripple";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ChoiceButton from "./ChoiceButton";
import type { Question } from "../../Interface/Question";

function ViewAnswers() {
  const navigate = useNavigate();
  const location = useLocation();
  const questions: Question[] = location.state.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <main className="h-full w-full p-6 relative z-10 flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      <div className="flex mb-8">
        <button
          type="button"
          className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm p-ripple"
          onClick={() =>
            navigate("/score", { state: { questions: questions } })
          }
        >
          <span
            className="material-symbols-rounded"
            style={{
              fontSize: "40px",
              color: "var(--text-color)",
              fontWeight: "400",
            }}
          >
            arrow_back
          </span>
          <Ripple />
        </button>
      </div>

      <div className="flex w-full justify-between mb-4">
        <button
          type="button"
          className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm p-ripple border border-(--secondary-color) w-[80px] justify-center"
          onClick={() => {
            setCurrentQuestionIndex((prev) => {
              const updated = prev - 1;
              return updated >= 0 ? updated : prev;
            });
          }}
        >
          <span
            className="material-symbols-rounded"
            style={{
              fontSize: "40px",
              color: "var(--text-color)",
              fontWeight: "400",
            }}
          >
            chevron_backward
          </span>
          <Ripple />
        </button>

        <button
          type="button"
          className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm p-ripple border border-(--secondary-color) w-[80px] justify-center"
          onClick={() => {
            setCurrentQuestionIndex((prev) => {
              const updated = prev + 1;
              return updated < questions.length ? updated : prev;
            });
          }}
        >
          <span
            className="material-symbols-rounded"
            style={{
              fontSize: "40px",
              color: "var(--text-color)",
              fontWeight: "400",
            }}
          >
            chevron_forward
          </span>
          <Ripple />
        </button>
      </div>

      <section className="grow">
        <div className="h-[273px] w-full rounded shadow-md bg-(--secondary-color) p-2.5 flex items-center justify-center mb-9 relative">
          <p className="text-(--white-text) text-xl text-center">
            {questions.length > currentQuestionIndex
              ? questions[currentQuestionIndex].question
              : ""}
          </p>

          {questions[currentQuestionIndex].chosen == questions[currentQuestionIndex].answer && <span className="absolute right-2 top-0 text-2xl italic text-green-400">+1</span>}
        </div>

        <section className="flex flex-col gap-2 overflow-y-auto pb-4">
          {questions[currentQuestionIndex].choices.map((item, i) => {
            return (
              <ChoiceButton
                key={i}
                index={i}
                label={item}
                chosen={questions[currentQuestionIndex].chosen!}
                correctAns={questions[currentQuestionIndex].answer}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default ViewAnswers;
