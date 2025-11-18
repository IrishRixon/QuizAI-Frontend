import { createContext } from "react";

interface CategoriesSelected {
    selectedCategories: string[];
    difficulty: string;
    numberOfQuestions: number;
}

export interface StateCat {
    categoriesSelected: CategoriesSelected;
    setCategoriesSelected: React.Dispatch<
      React.SetStateAction<CategoriesSelected>
    >;
  }


export const CategoryContext = createContext<StateCat | undefined >(undefined);