import { useContext, useEffect, useState } from "react";
import { CategoryContext, type StateCat } from "../../../Context/CategoryContext";

export function useCategorySelection(max: number) {
  const {categoriesSelected, setCategoriesSelected} = useContext(CategoryContext) as StateCat;

  const [isCategoryLessThanMax, setsIsCategoryLessThanMax] = useState(true);

  const selectedCategoriesLen = categoriesSelected.selectedCategories.length;

  useEffect(() => {
    setsIsCategoryLessThanMax(selectedCategoriesLen < max);
  }, [categoriesSelected.selectedCategories]);

  // useEffect(() => {
    
  // }, [categoriesSelected]);

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
