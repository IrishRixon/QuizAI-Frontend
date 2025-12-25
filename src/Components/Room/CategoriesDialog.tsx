import { Dialog } from "primereact/dialog";

import React, { useContext } from "react";
import Categories from "../Categories/Categories";
import { CategoryContext, type StateCat } from "../../Context/CategoryContext";
import { useCategorySelection } from "../Categories/hooks/useCategorySelection";
import Card from "../Categories/Card";
import Difficulty from "../Categories/Difficulty";
import NumberOfQues from "../Categories/NumberOfQues";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

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

function CategoriesDialog({ visible, setVisible }: Props) {
  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  const { isCategoryLessThanMax, selectedCategoriesLen, toggleCategory } =
    useCategorySelection(3);

  return (
    <div>
      <Dialog
        header="Select Categories"
        visible={visible}
        style={{ maxWidth: "30vw", minWidth: "300px", maxHeight: "80vh" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <main className="font-[Bree-serif]">
          <p className="text-end mb-4 text-(--white-text) text-md">
            selected: {categoriesSelected.selectedCategories.length}/3
          </p>

          <div className="flex flex-wrap content-start md:gap-x-4 justify-center gap-4">
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
        </main>
      </Dialog>
    </div>
  );
}

export default CategoriesDialog;
