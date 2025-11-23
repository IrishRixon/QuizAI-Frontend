import { useEffect, useRef } from "react";
import { storeQuestions } from "../../../API/questionsAPI";
import type { Question } from "../../../Interface/Question";

export function useStoreQuestions(param: Question[]) {
  const hasRun = useRef(false);
  
  useEffect(() => {
    if(hasRun.current) return;
    hasRun.current = true;
    
    const store = async () => {
      console.log("storing");
      
      await storeQuestions(param);
    };

    store();
  }, []);
}
