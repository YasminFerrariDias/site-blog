'use client'

import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { InformationCard } from "./components/informationCard";
import { Input } from "./components/input";
import { TbLockPassword } from "react-icons/tb";
import { useToastContext } from "@/hooks/use-toast-context/use-toast-context";

export default function CreatePage() {
  const toast = useToastContext();
  const [isLoading, setIsLoading] = useState(false)
  const hasShownToast = useRef(false);

  function handleInformation() {
    if (isLoading) return;
    if (hasShownToast.current) return;
    toast.success({
      heading: "Sucesso!",
      message: "Cadastro realizado com sucesso",
      duration: 3000
    });
  };

  return (
    <div className="flex flex-col gap-12 px-6 py-10 md:flex-row md:justify-between md:px-10 xl:px-20">
      <div className="flex flex-col gap-16 md:w-1/2">
        <div className="mt-7">
          <h2 className="text-heading-hg text-gray-100">Comece sua loja virtual hoje mesmo</h2>
          <p className="text-body-md text-gray-200">Junte-se a milhares de empreendedores que já transformaram seus negócios.</p>
        </div>

        <div className="flex flex-col gap-4">
          <InformationCard text="Criação em minutos, sem código" />
          <InformationCard text="Loja responsiva para todos dispositivos" />
          <InformationCard text="Suporte especializado 24/7" />
          <InformationCard text="Primeiros 30 dias grátis" />
        </div>
      </div>

      <div className="bg-gray-500 w-full max-w-full md:w-1/2 p-8 rounded-[28px] gap-3 flex flex-col mx-auto md:mx-0">
        <div>
          <h2
            className="text-3xl font-bold text-gray-100"
          >
            Criar conta grátis
          </h2>
          <p
            className="text-body-sm text-gray-200"
          >
            Preencha os dados abaixo para começar
          </p>
        </div>

        <div className="flex flex-col">
          <form action="" className="gap-4 flex flex-col">
            <Input placeholder="Digite seu nome" title="Nome completo" />

            <Input placeholder="seu@email" title="E-mail" />

            <Input placeholder="(11) 99999-9999" title="Telefone" />

            <Input placeholder="minha-loja.site.set" title="Nome da loja" />

            <Input placeholder="••••••••" title="Senha" type="password" />

            <Input placeholder="••••••••" title="Confirmar senha" type="password" />

            <div className="flex flex-col gap-3">
              <label className="flex items-start gap-2 text-gray-300">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 accent-cyan-400 cursor-pointer"
                />
                <span>
                  Li e aceito os
                  <a className="text-cyan-400 ml-1">Termos de Uso</a> e
                  <a className="text-cyan-400 ml-1">Política de Privacidade</a>
                </span>
              </label>
            </div>

            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={handleInformation}
            >
              Criar conta gratuita
            </Button>
          </form>

          <div className="gap-2 flex flex-col mt-6">
            <p className="text-gray-300 text-center">
              Já tem uma conta? <a className="text-cyan-400">Faça login</a>
            </p>

            <div className="h-px bg-gray-400" />

            <div className="flex flex-col items-center justify-center gap-2 text-gray-200 text-center md:flex-row md:gap-1">
              <TbLockPassword color="#00E5FF" />
              <p>Seus dados estão seguros</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}