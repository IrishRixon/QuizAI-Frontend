import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Question } from "../../../Interface/Question";
import { socket } from "../../../socket";
import type { RoomState } from "../../../Interface/RoomState";

export function useTimer(numberOfQues: number) {
  const timeLimit = 30;
  const [nextQuestion, setNextQuestion] = useState(false);
  const [timer, setTimer] = useState(timeLimit);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRunOut, setTimeRunOut] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [ roomState, setRoomState ] = useState<RoomState>();
  const { roomID, hostID } = useParams<{ roomID: string, hostID: string }>();

  const hasRun = useRef(false);

  useEffect(() => {
    if(!roomID) return;
    if (hasRun.current) return;
    hasRun.current = true;

    socket.emit("get-room-state", roomID);
    
    socket.on("room-update", (roomState: RoomState) => {
      setRoomState(roomState);
    });

    socket.on("next-question", (roomState: RoomState) => {
      setIsAnswered(false);
      socket.emit("toggle-off-all", roomID);
      setCurrentQuestionIndex(roomState.questionIndex);
    });

    if(socket.id === hostID) {
      socket.emit("start-timer", roomID);
    }
    
    socket.on("timer-update", (roomState: RoomState) => {
      setTimer(roomState.timer);
    });

  }, []);
  useEffect(() => {
    if(roomID) return;
    if (hasRun.current) return;
    hasRun.current = true;

    setInterval(() => {
      setTimer((prev) => {
        if (prev < 1) {
          setNextQuestion(true);
          return timeLimit;
        } else {
          setNextQuestion(false);
          return prev-1;
        }
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if(roomID) return;
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
    timeRunOut,
    setIsAnswered,
    isAnswered
  };
}
