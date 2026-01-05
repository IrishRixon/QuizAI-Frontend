import {
  useContext,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { Question } from "../../../Interface/Question";
import {
  CategoryContext,
  type StateCat,
} from "../../../Context/CategoryContext";
import { postCategories, getDataToDatabase } from "../../../API/questionsAPI";
import { ToastContext } from "../../../Context/Toast";
import type { Toast } from "primereact/toast";
import { socket } from "../../../socket";
import type { RoomState } from "../../../Interface/RoomState";
import { useParams } from "react-router";


export function useFetchQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [isFromDB, setIsFromDb] = useState(false);
  const [roomState, setRoomState] = useState<RoomState>();
  const { roomID, hostID } = useParams<{ roomID: string, hostID: string }>();

  const { categoriesSelected, setCategoriesSelected } = useContext(
    CategoryContext
  ) as StateCat;
  const toast = useContext(ToastContext);

  const hasFetched = useRef(false);

  // useEffect(() => {
  //   if(window.location.pathname === `/multiplayer/room/:roomID/questions`) return;
  //   if (hasFetched.current) return;
  //   hasFetched.current = true;

  //   const fetching = async () => {
  //     let result;
  //     try {
  //       result = await postCategories(categoriesSelected);
  //       setIsFromDb(false);
  //       setQuestions(result.data);
  //     } catch (error) {
  //       toast?.current?.show({ severity: 'info', summary: 'Getting questions from Database', detail: "AI failed to generate questions", life: 5000 });
  //       result = await getDataToDatabase(categoriesSelected);
  //       setIsFromDb(true);
  //       setQuestions(result.data);
  //     }
  //   };

  //     fetching();

  // }, []);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    
    socket.emit("toggle-off-all", roomID);
    
    if(socket.id === hostID) {
      socket.emit("generate-questions", roomID);
    }

    socket.on("room-update", (room: RoomState) => {
      setRoomState(room);
      setQuestions(room.questions);
      console.log(room, "ques");
      
    });


  }, []);

  const changeChosen = (index: number, chosen: number) => {
    setQuestions((prev) => {
      const copy = prev;
      copy[index] = { ...copy[index], chosen: chosen };
      return copy;
    });
  };

  return { questions, isFromDB, changeChosen };
}
