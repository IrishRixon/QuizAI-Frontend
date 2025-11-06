import { useEffect, useRef, useState } from "react";

export function useTimer(numberOfQues: number) {
  const timeLimit = 30;
  const [runTimer, setRunTimer] = useState(true);
  const [timer, setTimer] = useState(timeLimit);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const hasRun = useRef(false);
  let interval: number | undefined;

  useEffect(() => {
    // if (hasRun.current) return;
    // hasRun.current = true;
    console.log("ran effect");

    if (runTimer) {
      console.log("ran");
      
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev < 1 && currentQuestionIndex < numberOfQues-1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            return timeLimit;
          }
          else if(currentQuestionIndex >= numberOfQues-1) {
            console.log("run");
            
            setRunTimer(false);
            clearInterval(interval);
          }

          return prev - 1;
        });
      }, 1000);

      
    }
  }, []);

  const resetTimer = () => {
    setTimer((prev) => (timeLimit));
  };

  return {
    timer,
    currentQuestionIndex,
  };
}
