import { createContext } from "react";
import { useCategory } from "../Components/Categories/hooks/useCategory";

const categorySelected = useCategory();
export const CategoryContext = createContext(categorySelected);
