import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

interface CategoriesSelected {
  selectedCategories: string[];
  difficulty: string;
  numberOfQuestions: number;
}

function Categories() {
  const updateSelectedItem = (newArr: string[]) => {
    const updated = {
      ...categoriesSelected,
      selectedCategories: newArr,
    };

    setCategoriesSelected(updated);
    setsIsCategoryLessThan3(!(updated.selectedCategories.length >= 3));
  };

  const removeEmittedValue = (val: string) => {
    const newArr = categoriesSelected.selectedCategories.filter((item) => {
      return item !== val;
    });

    updateSelectedItem(newArr);
    setSelectedCount((s) => s - 1);
    return;
  };

  const checkIfValid = (val: string, toggleActive: () => void) => {
    console.log(isCategoryLessThan3);
    
    if (categoriesSelected.selectedCategories.includes(val)) {
      removeEmittedValue(val);
      toggleActive();
    } else if (isCategoryLessThan3) {
      addEmittedValue(val);
    }
  };

  const addEmittedValue = (val: string) => {
    const newArr = [...categoriesSelected.selectedCategories, val];
    updateSelectedItem(newArr);
    setSelectedCount((s) => s + 1);

    console.log(categoriesSelected);
  };

  const [categoriesSelected, setCategoriesSelected] =
    useState<CategoriesSelected>({
      selectedCategories: [],
      difficulty: "",
      numberOfQuestions: 0,
    });

  const categories = [
    "Food",
    "History",
    "Music",
    "Anime",
    "Heroes",
    "Sports",
    "Riddles",
    "Countries",
    "Quotes",
  ];

  const [isCategoryLessThan3, setsIsCategoryLessThan3] = useState(true);
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <div className="h-full w-full p-6 relative z-10 flex flex-col">
      <button
        type="button"
        className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm"
      >
        <span
          className="material-symbols-rounded"
          style={{
            fontSize: "40px",
            color: "var(--text-color)",
            fontWeight: "400",
          }}
        >
          arrow_back
        </span>
      </button>

      <p className="text-end mt-4 text-(--white-text) text-xl">
        selected: {selectedCount}/3
      </p>

      <div className="flex grow mt-8 flex-col">
        <div className="flex flex-wrap justify-between content-start gap-y-4">
          {categories.map((item, index) => {
            return (
              <Card
                image={`/images/${item}.png`}
                alt={item}
                label={item}
                key={index}
                isActive={isCategoryLessThan3}
                emitValue={(val: string, toggleActive) => checkIfValid(val, toggleActive)}
              ></Card>
            );
          })}
        </div>

        <div>
          <p className="text-start mt-8 text-(--white-text) text-xl">
            Select difficulty:
          </p>
          <div className="mt-4 flex justify-between">
            <Button label="Easy"></Button>
            <Button label="Medium"></Button>
            <Button label="Hard"></Button>
          </div>
        </div>

        <div>
          <p className="text-start mt-8 text-(--white-text) text-xl">
            Number of questions:
          </p>
          <div className="mt-4 flex justify-between">
            <Button label="10"></Button>
            <Button label="15"></Button>
            <Button label="20"></Button>
          </div>
        </div>
      </div>

      <button className="h-[53px] w-full bg-(--accent-color) rounded text-(--white-text)">
        Start
      </button>
    </div>
  );
}

export default Categories;
