import { useContext, useEffect, useRef, useState } from "react";
import type { Question } from "../../../Interface/Question";
import {
  CategoryContext,
  type StateCat,
} from "../../../Context/CategoryContext";
import { postCategories } from "../../../API/questionsAPI";

export function useFetchQuestions() {
  const [questions, setQuestions] = useState<Question[]>([{
    question: "fdgfdgdgdbdsbd",
    choices: ["Hello", "Hey"],
    answer: 1,
  }]);
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return; // prevent double fetch in dev
    hasFetched.current = true;

    console.log("Fetching");
    
    const fetching = async () => {
        try {
            const { data } = await postCategories(categoriesSelected);
            console.log(data);
            
            setQuestions(data);
          } catch (error) {
            console.error("Error fetching questions:", error);
          }
      };

     
  }, [])

  return questions;
}
