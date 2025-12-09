import { useNavigate } from "react-router";
import type { Question } from "../Interface/Question";

export function checkAnswer(selected: number, correct: number): boolean {
  return selected === correct;
}
