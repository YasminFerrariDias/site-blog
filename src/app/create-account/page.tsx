'use client'

import Auth from "@/templates/auth/auth";
import { FormCreateAccount } from "@/templates/auth/features/form-create-account";

export default function CreateAccount() {

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
      <FormCreateAccount />
    </Auth>
  )
}