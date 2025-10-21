import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen w-screen bg-(--primary-color) relative">
          <div className="absolute h-screen w-screen bg-[url(/images/robot.png)] bg-repeat-round bg-[length:80px_80px] opacity-30 -z-0"></div>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
