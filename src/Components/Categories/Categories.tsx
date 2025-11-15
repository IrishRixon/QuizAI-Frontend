import { useContext, useEffect, useState } from "react";

import Card from "./Card";
import Difficulty from "./Difficulty";
import { useCategorySelection } from "./hooks/useCategorySelection";
import NumberOfQues from "./NumberOfQues";
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";
import { useNavigate } from "react-router";
import { Ripple } from "primereact/ripple";

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
  const { categoriesSelected } = useContext(CategoryContext) as StateCat;
  const { isCategoryLessThanMax, selectedCategoriesLen, toggleCategory } =
    useCategorySelection(3);
  let navigate = useNavigate();
  const isStartBtnDisabled = categoriesSelected.selectedCategories.length == 0;

  return (
    <div className="h-full w-full p-6 relative z-10 flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      
      <div>
        <button
          type="button"
          className="flex active:bg-(--secondary-color) active:text-(--white-text) rounded-sm p-ripple"
          onClick={() => navigate("/")}
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
          <Ripple />
        </button>
      </div>

      <p className="text-end mt-4 text-(--white-text) text-xl">
        selected: {selectedCategoriesLen}/3
      </p>

      <div className="flex grow mt-8 flex-col overflow-y-auto sm:pb-10">
        <div className="flex flex-wrap justify-between content-start gap-y-4 sm:gap-x-4">
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

      <button
        className={`h-[53px] w-full  rounded text-(--white-text) border border-(--accent-color) p-ripple ${
          !isStartBtnDisabled && "bg-(--accent-color)"
        }`}
        onClick={() => navigate("/questions")}
        disabled={isStartBtnDisabled}
      >
        Start
        <Ripple />
      </button>
    </div>
  );
}

export default Categories;
