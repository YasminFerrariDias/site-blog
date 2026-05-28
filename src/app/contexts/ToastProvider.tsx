'use client'

import { ToastType } from "@/components/ToastMessage";
import { ToastContext, ToastContextType } from "./ToastContext";
import { useState } from "react";
import ToastMessage from "@/components/ToastMessage/ToastMessage";

interface ToastProviderProps {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toastData, setToastData] = useState<ToastType[]>([]);

  function removeToast(id: number) {
    setToastData(toastData.filter((toast) =>
      toast.id !== id
    ))
  }

  function addToast({ heading, message, duration, type }: ToastType) {
    const id = Date.now()
    const newToastData: ToastType = { id, heading, message, duration, type }

    setToastData([...toastData, newToastData])

    setTimeout(() => {
      removeToast(id)
    }, duration ?? 3000)
  }

  const success = ({ heading, message, duration }: ToastType) => {
    addToast({ heading, message, duration, type: "success" })
  };

  const warning = ({ heading, message, duration }: ToastType) => {
    addToast({ heading, message, duration, type: "warn" })
  };

  const info = ({ heading, message, duration }: ToastType) => {
    addToast({ heading, message, duration, type: "info" })
  };

  const error = ({ heading, message, duration }: ToastType) => {
    addToast({ heading, message, duration, type: "error" })
  };

  const value: ToastContextType = { success, warning, info, error }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toastData.map((toast) => (
          <ToastMessage key={toast.id} toast={toast}/>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
