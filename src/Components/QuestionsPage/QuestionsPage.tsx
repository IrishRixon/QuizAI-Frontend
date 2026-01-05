import { useLocation } from "react-router";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useFetchQuestions } from "./hooks/useFetchQuestions";
import WithQuestions from "./WithQuestions";
import { useEffect, useState } from "react";
import { socket } from "../../socket";

function QuestionsPage() {
  const { questions, isFromDB, changeChosen } = useFetchQuestions();

  return (
    <main className="p-6 w-full h-full z-10 relative flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px] overflow-y-auto">
      {questions.length == 0 ? (
        <LoadingPage text="AI is generating questions..." />
      ) : (
        <WithQuestions
          questions={questions}
          isFromDB={isFromDB}
          changeChosen={changeChosen}
        ></WithQuestions>
      )}
    </main>
  );
}

export default QuestionsPage;
