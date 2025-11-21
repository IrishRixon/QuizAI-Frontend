import { useContext, useEffect, useRef, useState } from "react";
import type { Question } from "../../../Interface/Question";
import {
  CategoryContext,
  type StateCat,
} from "../../../Context/CategoryContext";
import { postCategories, getDataToDatabase } from "../../../API/questionsAPI";

export function useFetchQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  const [isFromDB, setIsFromDb] = useState(false);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    console.log("Fetching");

    const fetching = async () => {
      let result;
      try {
        result = await postCategories(categoriesSelected);
        setIsFromDb(false);
        setQuestions(result.data);
      } catch (error) {
        console.log(error, "error fetch");
        
        result = await getDataToDatabase(categoriesSelected);
        setIsFromDb(true);
        setQuestions(result.data);
      }
    };

    fetching();
  }, []);

  return { questions, isFromDB };
}
