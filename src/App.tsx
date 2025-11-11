import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Categories from "./Components/Categories/Categories";
import { createContext, useState } from "react";
import { CategoryContext } from "./Context/CategoryContext";
import QuestionsPage from "./Components/QuestionsPage/QuestionsPage";
import { ScoreContext } from "./Context/ScoreContext";
import Score from "./Components/Score/Score";

interface CategoriesSelected {
  selectedCategories: string[];
  difficulty: string;
  numberOfQuestions: number;
}

function App() {
  const [categoriesSelected, setCategoriesSelected] =
    useState<CategoriesSelected>({
      selectedCategories: [],
      difficulty: "easy",
      numberOfQuestions: 10,
    });

    const [score, setScore] = useState<number>(0);

  return (
    <>
      <CategoryContext value={{ categoriesSelected, setCategoriesSelected }}>
        <ScoreContext value={{score, setScore}}>
          <BrowserRouter>
            <div className="h-screen w-screen bg-(--primary-color) relative">
              <div className="absolute h-screen w-screen bg-[url(/images/robot.png)] bg-repeat-round bg-[length:80px_80px] opacity-30 -z-0"></div>

              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/questions" element={<QuestionsPage />} />
                <Route path="/score" element={<Score />} />
                <Route path="*" element={<h1>Page not found</h1>} />
              </Routes>
            </div>
          </BrowserRouter>
        </ScoreContext>
      </CategoryContext>
    </>
  );
}

export default App;
