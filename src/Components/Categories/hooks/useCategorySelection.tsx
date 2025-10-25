import { useEffect, useState } from "react";

interface CategoriesSelected {
  selectedCategories: string[];
  difficulty: string;
  numberOfQuestions: number;
}

export function useCategorySelection(max: number) {
  const [isCategoryLessThanMax, setsIsCategoryLessThanMax] = useState(true);

  const [categoriesSelected, setCategoriesSelected] =
    useState<CategoriesSelected>({
      selectedCategories: [],
      difficulty: "",
      numberOfQuestions: 0,
    });

  const selectedCategoriesLen = categoriesSelected.selectedCategories.length;

  useEffect(() => {
    setsIsCategoryLessThanMax(selectedCategoriesLen < max);
  }, [categoriesSelected.selectedCategories]);

  const toggleCategory = (val: string) => {
    setCategoriesSelected((prev) => {
      const isSelected = prev.selectedCategories.includes(val);

      if (isSelected) {
        return {
          ...prev,
          selectedCategories: prev.selectedCategories.filter(
            (item) => item !== val
          ),
        };
      }

      if (prev.selectedCategories.length >= max) return prev;

      return {
        ...prev,
        selectedCategories: [...prev.selectedCategories, val],
      };
    });
  };

  return {
    selectedCategoriesLen,
    toggleCategory,
    isCategoryLessThanMax,
  };
}
