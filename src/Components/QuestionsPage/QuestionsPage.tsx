import { useFetchQuestions } from "./hooks/useFetchQuestions";
import NoQuestions from "./NoQuestions";
import WithQuestions from "./WithQuestions";

function QuestionsPage() {
  const {questions, isFromDB, changeChosen} = useFetchQuestions();

  if (questions.length === 0) {
    return <NoQuestions />;
  } else {
    return <WithQuestions questions={questions} isFromDB={isFromDB} changeChosen={changeChosen}></WithQuestions>;
  }
}

export default QuestionsPage;
