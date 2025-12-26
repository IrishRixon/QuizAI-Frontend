import { useContext, useEffect } from "react";
import { ToastContext } from "../../Context/Toast";
import ButtonTransparent from "../GeneralBtn/Button";
import { useNavigate } from "react-router";
import type { Toast } from "primereact/toast";

function LandingPage() {
  // const toast = useContext(ToastContext);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("visitedLanding", "true");
  }, []);

  return (
    <>
      <div className="h-full w-full bg-(--primary-color) relative">
        <div className="absolute h-full w-full bg-[url(/images/robot.png)] bg-repeat-round bg-[length:80px_80px] opacity-30 -z-0"></div>
        {/*Logo start*/}
        <div className="relative z-10 pt-28 flex justify-center">
          <div className="relative w-[192px] h-[152px] flex items-center sm:w-[300px]">
            <h1 className="font-[Bungee] text-5xl sm:text-7xl text-(--text-color) title inline relative w-full">
              <span className="relative z-20">Quiz</span>
              <span className="absolute bottom-5 left-32 sm:left-44 secondary-title text-(--secondary-color) z-10">
                AI
              </span>
            </h1>
            {/*Blob*/}
            <div className="blob absolute h-[192px] w-[192px] bg-[#4C578E] sm:h-[300px] sm:w-[300px] rounded-full blur-3xl"></div>
          </div>
        </div>
        {/*Logo end*/}

        <div className="w-full flex items-center flex-col gap-4 mt-[243px] sm:px-28 md:px-40 lg:px-52 xl:px-[450px]">
          <ButtonTransparent
            label="Single Player"
            handleClicked={() => navigate("/categories")}
          ></ButtonTransparent>
          <ButtonTransparent
            label="MultiPlayer"
            handleClicked={() => {navigate('multiplayer')}}
          ></ButtonTransparent>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

// {
//   toast?.current?.show({
//     severity: "info",
//     summary: "In development",
//     detail: "Multiplayer is in the process of development",
//     life: 5000,
//   });
// }
