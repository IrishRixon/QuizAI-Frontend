import { useContext, useEffect, useState } from "react";
import { CategoryContext, type StateCat } from "../../../Context/CategoryContext";

const selection = [10, 15, 20];

export function useNumberOfQuesSelection() {
    const {categoriesSelected, setCategoriesSelected} = useContext(CategoryContext) as StateCat;
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


