import { createContext, useRef, type RefObject } from "react";
import { Toast } from "primereact/toast";

export const ToastContext = createContext<RefObject<Toast | null> | null>(null);
