import { Button } from "primereact/button";
import { ToastContext } from "../../Context/Toast";
import { useContext } from "react";
import type { Toast } from "primereact/toast";

function NoQuestions() {
  return (
    <>
      <main className="flex items-center justify-center p-6 w-full h-full z-10 relative text-center text-md text-(--text-color)">
        <div className="flex flex-col justify-center gap-6">
          <i className="pi pi-spin pi-cog" style={{ fontSize: "5rem" }}></i>
          <p>AI is generating questions...</p>
        </div>
      </main>
    </>
  );
}

export default NoQuestions;
