import { useEffect, useRef, useState } from "react";

export function useTimer(numberOfQues: number) {
  const timeLimit = 30;
  const [runTimer, setRunTimer] = useState(true);
  const [timer, setTimer] = useState(timeLimit);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const hasRun = useRef(false);
  let interval: number | undefined;

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (runTimer) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev < 1) {
            setCurrentQuestionIndex((c) => {
              console.log(c + 1, 'timer');
              return c + 1;
            });
            return timeLimit;
          }

          return prev - 1;
        });
      }, 1000);
      setRunTimer(false);
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
