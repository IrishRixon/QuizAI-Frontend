import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import type { Question } from "../../../Interface/Question";

export function useTimer(numberOfQues: number) {
  const timeLimit = 30;
  const [nextQuestion, setNextQuestion] = useState(false);
  const [timer, setTimer] = useState(timeLimit);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRunOut, setTimeRunOut] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    setInterval(() => {
      setTimer((prev) => {
        if (prev < 1) {
          setNextQuestion(true);
          return timeLimit;
        } else {
          setNextQuestion(false);
          return prev; /*-1;*/
        }
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (nextQuestion && currentQuestionIndex < numberOfQues - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (nextQuestion && currentQuestionIndex == numberOfQues - 1) {
      setTimeRunOut(true);
    }
  }, [nextQuestion]);


  return {
    timer,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setTimer,
    timeRunOut
  };
}
