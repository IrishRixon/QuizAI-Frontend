import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../../Context/CategoryContext";

const difficultyLvls = ["Easy", "Medium", "Hard"];

export function useDifficultySelection() {
  // const { categoriesSelected, setCategoriesSelected } = useCategory();
  const context = useContext(CategoryContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClicked = (index: number) => {
    setSelectedIndex(index);
    context!.setCategoriesSelected((prev) => {
      return { ...prev, difficulty: difficultyLvls[index] };
    });
  };

  useEffect(() => {
  }, [context!.categoriesSelected]);

  return {
    selectedIndex,
    handleClicked,
    difficultyLvls,
  };
}
