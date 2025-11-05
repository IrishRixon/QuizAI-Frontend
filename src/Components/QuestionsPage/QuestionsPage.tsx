import { useState } from "react";
import ChoiceButton from "./ChoiceButton";
import type { Question } from "../../Interface/Question";

function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);

  if (questions.length === 0) {
    return (
      <>
      {setQuestions((prev) => {
        return [
          {
            question: "What is the capital of Australia?",
            choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            answer: 2,
          },
        ];  
      })}
        <main className="p-6 w-full h-full z-10 relative flex flex-col justify-center text-center text-2xl text-(--text-color)">
          <i className="pi pi-spin pi-cog" style={{ fontSize: "5rem" }}></i>
          AI is generating questions...
        </main>
      </>
    );
  } else {
    return (
      <main className="p-6 w-full h-full z-10 relative flex flex-col">
        <div className="flex justify-end mb-6">
          <span className="text-(--white-text) text-xl justify-center flex items-center w-[50px] h-[50px] rounded-full bg-(--secondary-color)">
            30
          </span>
        </div>

        <section className="grow">
          <div className="h-[273px] w-full rounded shadow-md bg-(--secondary-color) p-2.5 flex items-center justify-center mb-9">
            <p className="text-(--white-text) text-xl">
              What is the capital of Australia?
            </p>
          </div>

          <section className="flex flex-col gap-2">
            <ChoiceButton />
            <ChoiceButton />
            <ChoiceButton />
            <ChoiceButton />
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
