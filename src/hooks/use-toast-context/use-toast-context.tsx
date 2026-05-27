import { ToastContext } from "@/app/contexts/ToastContext";
import { useContext } from "react";

export function useToastContext() {
  const context = useContext(ToastContext);

  if(!context) {
    throw new Error('useToastContext deve ser usado dentro de um ToastProvider');
  }

  return context
}
