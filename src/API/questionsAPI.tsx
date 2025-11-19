import type { Question } from "../Interface/Question";
import { axiosInstance } from "./AxiosInstance";

interface CategoriesSelected {
    selectedCategories: string[];
    difficulty: string;
    numberOfQuestions: number;
  }

export const postCategories = async (body: CategoriesSelected) => {
    const response = axiosInstance.post("/questions", body);
    return response;  
};

export const storeQuestions = async (body: Question[]) => {
    axiosInstance.post("/store-questions", body);
}
