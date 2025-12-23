import LoadingPage from "../LoadingPage/LoadingPage";
import { useFetchQuestions } from "./hooks/useFetchQuestions";
import WithQuestions from "./WithQuestions";

function QuestionsPage() {
  const {questions, isFromDB, changeChosen} = useFetchQuestions();

  if (questions.length === 0) {
    return <LoadingPage text="AI is generating questions..." />;
  } else {
    return <WithQuestions questions={questions} isFromDB={isFromDB} changeChosen={changeChosen}></WithQuestions>;
  }
}

export default QuestionsPage;
