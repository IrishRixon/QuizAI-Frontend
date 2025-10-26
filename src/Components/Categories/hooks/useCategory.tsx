import { useState } from "react";

interface CategoriesSelected {
  selectedCategories: string[];
  difficulty: string;
  numberOfQuestions: number;
}

export function useCategory() {
  const [categoriesSelected, setCategoriesSelected] =
    useState<CategoriesSelected>({
      selectedCategories: [],
      difficulty: "",
      numberOfQuestions: 0,
    });

  return {
    categoriesSelected,
    setCategoriesSelected,
  };
}
