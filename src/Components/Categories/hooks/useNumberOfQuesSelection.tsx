import { useEffect, useState } from "react";
import { useCategory } from "./useCategory"

const selection = [10, 20, 30];

export function useNumberOfQuesSelection() {
    const { categoriesSelected, setCategoriesSelected} = useCategory();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClicked = (index: number) => {
        setSelectedIndex(index);
        setCategoriesSelected((prev) => {
            return { ...prev, numberOfQuestions: selection[index]}
        });
    }

    useEffect(() => {
        console.log(categoriesSelected, 'number');
    }, [categoriesSelected])

    return { selectedIndex, selection, handleClicked}
}


