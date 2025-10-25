import { useState } from "react";

export function useDifficultySelection() {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleClicked = (index: number) => {
        setSelectedIndex(s => s = index);
        
    }

    return {
        selectedIndex,
        handleClicked
    };
}



