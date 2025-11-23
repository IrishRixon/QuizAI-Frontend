import { useContext, useEffect, useRef, useState } from "react";
import type { Question } from "../../../Interface/Question";
import {
  CategoryContext,
  type StateCat,
} from "../../../Context/CategoryContext";
import { postCategories, getDataToDatabase } from "../../../API/questionsAPI";
import { ToastContext } from "../../../Context/Toast";
import type { Toast } from "primereact/toast";


export function useFetchQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isFromDB, setIsFromDb] = useState(false);

  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  const toast = useContext(ToastContext) as Toast;


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
        toast.show({ severity: 'info', summary: 'Getting questions from Database', detail: "AI failed to generate questions", life: 5000 });
        result = await getDataToDatabase(categoriesSelected);
        setIsFromDb(true);
        setQuestions(result.data);
      }
    };

    fetching();
  }, []);

  return { questions, isFromDB };
}
