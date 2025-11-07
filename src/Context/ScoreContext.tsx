
import { createContext } from "react";

export interface ScoreContextType {
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const ScoreContext = createContext<ScoreContextType | undefined>(undefined);