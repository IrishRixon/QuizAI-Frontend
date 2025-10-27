import { useEffect, useState } from "react";
import { useCategory } from "./useCategory";

const difficultyLvls = [
    "Easy",
    "Medium",
    "Hard"
];

export function useDifficultySelection() {
    const { categoriesSelected, setCategoriesSelected } = useCategory();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClicked = (index: number) => {
        setSelectedIndex(s => s = index);
        setCategoriesSelected((prev) => {
            return {...prev, difficulty: difficultyLvls[index]};
        })        
    };

    useEffect(() => {
        console.log(categoriesSelected, 'number');
    }, [categoriesSelected])


    return {
        selectedIndex,
        handleClicked,
        difficultyLvls
    };
}



