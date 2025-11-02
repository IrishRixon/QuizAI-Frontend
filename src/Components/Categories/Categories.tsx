import { useContext, useEffect, useState } from "react";

import Card from "./Card";
import Difficulty from "./Difficulty";
import { useCategorySelection } from "./hooks/useCategorySelection";
import NumberOfQues from "./NumberOfQues";
import { postCategories } from "../../API/questionsAPI";
import { CategoryContext } from "../../Context/CategoryContext";

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

function Categories() {
  const context = useContext(CategoryContext);
  const { isCategoryLessThanMax, selectedCategoriesLen, toggleCategory } =
    useCategorySelection(3);

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
        selected: {selectedCategoriesLen}/3
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
                canActive={isCategoryLessThanMax}
                emitValue={(val: string) => toggleCategory(val)}
              ></Card>
            );
          })}
        </div>

        <div>
          <Difficulty></Difficulty>
        </div>

        <div>
          <NumberOfQues></NumberOfQues>
        </div>
      </div>

      <button className="h-[53px] w-full bg-(--accent-color) rounded text-(--white-text)" onClick={() => postCategories(context!.categoriesSelected)}>
        Start
      </button>
    </div>
  );
}

export default Categories;
