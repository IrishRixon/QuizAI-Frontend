import { useContext, useState } from "react";
import type { Question } from "../../../Interface/Question";
import {
  CategoryContext,
  type StateCat,
} from "../../../Context/CategoryContext";
import { postCategories } from "../../../API/questionsAPI";

export function useFetchQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;

  const fetching = async () => {
    try {
        const { data } = await postCategories(categoriesSelected);
        console.log(data);
        
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
  }

  fetching();
  return questions;
}
