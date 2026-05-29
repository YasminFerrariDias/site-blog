'use client'

import { ToastType } from "@/components/ToastMessage";
import { ToastContext, ToastContextType } from "./ToastContext";
import { useRef } from "react";
import { Toast } from "primereact/toast";

interface ToastProviderProps {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const toastRef = useRef<Toast | null>(null)

  const showToast = ({ heading, message, duration, type }: ToastType) => {
    toastRef.current?.show({
      severity: type,
      summary: heading,
      detail: message,
      life: duration ?? 5000
    })  
  }

  const success = ({ heading, message, duration }: ToastType) => {
    showToast({ heading, message, duration, type: "success" })
  };

  const warning = ({ heading, message, duration }: ToastType) => {
    showToast({ heading, message, duration, type: "warn" })
  };

  const info = ({ heading, message, duration }: ToastType) => {
    showToast({ heading, message, duration, type: "info" })
  };

  const error = ({ heading, message, duration }: ToastType) => {
    showToast({ heading, message, duration, type: "error" })
  };

  const value: ToastContextType = { success, warning, info, error }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast ref={toastRef} />
    </ToastContext.Provider>
  )
}
