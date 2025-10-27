import { axiosInstance } from "./AxiosInstance";

interface CategoriesSelected {
    selectedCategories: string[];
    difficulty: string;
    numberOfQuestions: number;
  }

export const getQuestions = async (body: CategoriesSelected) => {
    const response = axiosInstance.post("/questions", body);
    return response;  
};
