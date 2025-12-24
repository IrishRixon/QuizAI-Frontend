import { useContext, useEffect } from "react";

import Card from "./Card";
import Difficulty from "./Difficulty";
import { useCategorySelection } from "./hooks/useCategorySelection";
import NumberOfQues from "./NumberOfQues";
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";
import { useNavigate } from "react-router";
import { Ripple } from "primereact/ripple";
import BackButton from "../GeneralBtn/BackButton";
import FooterButton from "../GeneralBtn/FooterButton";

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
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  const { isCategoryLessThanMax, selectedCategoriesLen, toggleCategory } =
    useCategorySelection(3);
  let navigate = useNavigate();

  const isStartBtnDisabled = categoriesSelected.selectedCategories.length == 0;
  const isCreateRoom = window.location.pathname === '/multiplayer/categories';

  useEffect(() => {
    setCategoriesSelected((prev) => {
      return { ...prev, selectedCategories: [] };
    });
  }, []);

  return (
    <main className="h-full w-full p-6 relative z-10 flex flex-col sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
      <div className="flex justify-between">
        <BackButton
          handleClick={() => {
            isCreateRoom ? navigate("/multiplayer") : navigate('/');
          }}
        />

        <p className="text-end mt-4 text-(--white-text) text-xl">
          selected: {categoriesSelected.selectedCategories.length}/3
        </p>
      </div>

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

      <footer>
        <FooterButton
          boolRef={isStartBtnDisabled}
          handleClick={() => isCreateRoom ? navigate("/multiplayer/room") : navigate("/questions")}
          label={ isCreateRoom ? "Create Room" : "Start"}
          isDisabled={isStartBtnDisabled}
        />
      </footer>
    </main>
  );
}

export default Categories;
