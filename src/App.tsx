import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Categories from "./Components/Categories/Categories";
import { useRef, useState } from "react";
import { CategoryContext } from "./Context/CategoryContext";
import QuestionsPage from "./Components/QuestionsPage/QuestionsPage";
import { ScoreContext } from "./Context/ScoreContext";
import Score from "./Components/Score/Score";
import { PrimeReactProvider } from "primereact/api";
import type { APIOptions } from "primereact/api";
import { Toast } from "primereact/toast";
import { ToastContext } from "./Context/Toast";
import { Button } from "primereact/button";
import ViewAnswers from "./Components/ViewAnswers/ViewAnswers";
import ProtectedRoute from "./Utils/ProtectedRoute";
import RoomOptions from "./Components/RoomOptions/RoomOptions";
import Room from "./Components/Room/Room";
import MultiScore from "./Components/MultiScore/MultiScore";
import JoinRoom from "./Components/JoinRoom/JoinRoom";

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

  const value: APIOptions = {
    appendTo: "self",
    ripple: true,
  };

  const [score, setScore] = useState<number>(0);
  const toast = useRef<Toast>(null);

  return (
    <>
      <PrimeReactProvider value={value}>
        <CategoryContext value={{ categoriesSelected, setCategoriesSelected }}>
          <ScoreContext value={{ score, setScore }}>
            <ToastContext value={toast}>
              <BrowserRouter>
                <div className="h-dvh w-full bg-(--primary-color) relative">
                  <div className="absolute h-screen w-screen bg-[url(/images/robot.png)] bg-repeat-round bg-[length:80px_80px] opacity-30 -z-0"></div>
                  
                  <Toast ref={toast} position="top-center" />
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/categories" element={ <ProtectedRoute><Categories /></ProtectedRoute>} />
                    <Route path="/questions" element={ <ProtectedRoute><QuestionsPage /></ProtectedRoute>} />
                    <Route path="/score" element={ <ProtectedRoute><Score /></ProtectedRoute>} />
                    <Route path="/viewAnswers" element={ <ProtectedRoute><ViewAnswers /></ProtectedRoute>} />
                    <Route path="/multiplayer" element={ <ProtectedRoute><RoomOptions /></ProtectedRoute> } />
                    <Route path="/multiplayer/joinroom" element={ <ProtectedRoute><JoinRoom /></ProtectedRoute> } />
                    <Route path="/multiplayer/categories" element={ <ProtectedRoute><Categories /></ProtectedRoute>} />
                    <Route path="/multiplayer/room" element={ <ProtectedRoute><Room /></ProtectedRoute> } />
                    <Route path="/multiplayer/questions" element={ <ProtectedRoute><QuestionsPage /></ProtectedRoute>} />
                    <Route path="/multiplayer/multiscore" element={ <ProtectedRoute><MultiScore /></ProtectedRoute> } />
                    <Route path="*" element={<h1 className="h-full w-full flex items-center justify-center sm:text-xl md:text-2xl lg:text-4xl">404 Page not found</h1>} />
                  </Routes>
                </div>
              </BrowserRouter>
            </ToastContext>
          </ScoreContext>
        </CategoryContext>
      </PrimeReactProvider>
    </>
  );
}

export default App;
