// ToastContext.tsx 
import { createContext } from "react";
import { ToastType } from "@/components/ToastMessage";

export interface ToastContextType {
  success: ({ heading, message, duration }: ToastType) => void
  warning: ({ heading, message, duration }: ToastType) => void
  info: ({ heading, message, duration }: ToastType) => void
  error: ({ heading, message, duration }: ToastType) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
