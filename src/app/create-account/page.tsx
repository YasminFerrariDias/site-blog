'use client'

import { useToastContext } from "@/hooks/use-toast-context";
import Auth from "@/templates/auth/auth";
import { FormCreateAccount } from "@/templates/auth/features/form-create-account";
import { useRef } from "react";

export default function CreateAccount() {
  const toast = useToastContext();
  const hasShownToast = useRef(false);

  function handleInformation() {
    if (hasShownToast.current) return;
    toast.info({
      heading: "Funcionalidade em desenvolvimento!",
      message: "Cadastro simulado para demonstração",
      duration: 3000
    });
  };

  return (
    <Auth
      titleInformation="Comece sua loja virtual hoje mesmo"
      messageInformation="Junta-se a milhares de empreendedores que já transformaram seus negócios"
      textInformationCard1="Criação em minutos, sem código"
      textInformationCard2="Loja responsiva para todos os dispositivos"
      textInformationCard3="Suporte especializado 24/7"
      textInformationCard4="Primeiro 30 dias grátis"
      titleForm="Criar sua conta grátis"
      messageForm="Preencha os dados abaixo para começar"
    >
      <FormCreateAccount handle={handleInformation} />
    </Auth>
  )
}