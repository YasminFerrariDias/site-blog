'use client'

import { useToastContext } from "@/hooks/use-toast-context";
import Auth from "@/templates/auth/auth";
import { FormLoginAccount } from "@/templates/auth/features/form-login-account";
import { useRef } from "react";

export default function LoginAccount() {
  const toast = useToastContext();
  const hasShownToast = useRef(false);

  function handleInformation() {
    if (hasShownToast.current) return;
    toast.info({
      heading: "Funcionalidade em desenvolvimento!",
      message: "Login simulado para demonstração",
      duration: 3000
    });
  };

  return (
    <Auth
      titleInformation="Bem vindo de volta!"
      messageInformation="Gerencie sua loja virtual, acompanhe vendas e muito mais."

      textInformationCard1="Gerencie produtos e estoque"
      textInformationCard2="Acompanhe pedidos em tempo real"
      textInformationCard3="Relatórios de vendas completos"
      textInformationCard4="Suporte especializado 24/7"

      titleForm="Entrar na sua conta"
      messageForm="Insira suas credenciais para acessar"
    >
      <FormLoginAccount handle={handleInformation} />
    </Auth>
  )
}