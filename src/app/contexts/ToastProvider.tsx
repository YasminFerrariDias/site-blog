'use client'

import { ToastType } from "@/components/ToastMessage";
import { ToastContext, ToastContextType } from "./ToastContext";
import { useState } from "react";
import ToastMessage from "@/components/ToastMessage/ToastMessage";

interface ToastProviderProps {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toastData, setToastData] = useState<ToastType | undefined>(undefined);

  const showToast = (data: ToastType) => {
    return setToastData(data)
  }

  const success = ({ heading, message, duration }: ToastType) => {
    const toastData: ToastType = { heading, message, duration, type: "success" }
    showToast(toastData)
  };

  const warning = ({ heading, message, duration }: ToastType) => {
    const toastData: ToastType = { heading, message, duration, type: "warn" }
    showToast(toastData)
  };

  const info = ({ heading, message, duration }: ToastType) => {
    const toastData: ToastType = { heading, message, duration, type: "info" }
    showToast(toastData)
  };

  const error = ({ heading, message, duration }: ToastType) => {
    const toastData: ToastType = { heading, message, duration, type: "error" }
    showToast(toastData)
  };

  const value: ToastContextType = { success, warning, info, error }

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toastData && <ToastMessage toast={toastData} />}
    </ToastContext.Provider>
  )
}
