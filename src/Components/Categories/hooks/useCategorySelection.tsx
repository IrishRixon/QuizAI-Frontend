import { useEffect, useState } from "react";
import { useCategory } from "./useCategory";

export function useCategorySelection(max: number) {
  const { categoriesSelected, setCategoriesSelected } = useCategory();
  const [isCategoryLessThanMax, setsIsCategoryLessThanMax] = useState(true);


  const selectedCategoriesLen = categoriesSelected.selectedCategories.length;

  useEffect(() => {
    setsIsCategoryLessThanMax(selectedCategoriesLen < max);
  }, [categoriesSelected.selectedCategories]);

  useEffect(() => {
    console.log(categoriesSelected, 'category selection');
    
  }, [categoriesSelected]);

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
