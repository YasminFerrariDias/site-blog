import { Button } from "@/components/ui/button";
import { Input } from "../../components/input";
import { TbLockPassword } from "react-icons/tb";
import { useState } from "react";
import { useToastContext } from "@/hooks/use-toast-context";
import { z } from "zod";
import { registerSchema } from "@/schemas/register-schema";
import Link from "next/link";

export function FormCreateAccount() {
  const toast = useToastContext();

  const [data, setData] = useState({
    namePeople: '',
    email: '',
    telephone: '',
    nameStore: '',
    password: '',
    confirmPassword: '',
  })

  const [consent, setConsent] = useState(false)

  const [erro, setErro] = useState<{
    namePeople?: string,
    email?: string,
    telephone?: string,
    nameStore?: string,
    password?: string,
    confirmPassword?: string,
    consent?: string,
  }>({})

  function handleChange(nameField: string, value: string) {
    setData({
      ...data,
      [nameField]: value
    })

    if (erro[nameField as keyof typeof erro]) {
      setErro({ ...erro, [nameField]: undefined })
    }
  }

  function handleConsentChange(event: React.ChangeEvent<HTMLInputElement>) {
    setConsent(event.target.checked)

    if (erro.consent) {
      setErro({ ...erro, consent: undefined })
    }
  }

  function validateForm() {
    const erros: any = {}

    const result = registerSchema.safeParse(data)

    if (!result.success) {
      result.error.issues.forEach((issue: z.ZodIssue) => {
        erros[issue.path[0]] = issue.message
      })
    }
    if (!consent) {
      erros.consent = "Você precisa aceitar os Termos de Uso e Políticas de Privacidade"
    }

    return erros

    return {}
  }

  function handleSubmit() {
    const erros = validateForm()

    if (Object.keys(erros).length > 0) {
      setErro(erros)

      toast.error({
        heading: "Erro no cadastro",
        message: "Preencha todos os campos corretamente",
        duration: 4000
      })
      return
    }

    setErro({})
    toast.info({
      heading: "Funcionalidade em desenvolvimento!",
      message: "Cadastro simulado para demonstração",
      duration: 3000
    });
  };

  return (
    <>
      <form className="gap-4 flex flex-col">
        <Input
          name="namePeople"
          placeholder="Digite seu nome"
          title="Nome completo"
          value={data.namePeople}
          error={erro.namePeople}
          onChange={(e) => handleChange('namePeople', e.target.value)}
        />

        <Input
          name="email"
          placeholder="seu@email"
          title="E-mail"
          value={data.email}
          error={erro.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />

        <Input
          name="telephone"
          placeholder="(11) 99999-9999"
          title="Telefone"
          value={data.telephone}
          error={erro.telephone}
          onChange={(e) => handleChange('telephone', e.target.value)}
        />

        <Input
          name="nameStore"
          placeholder="minha-loja.site.set"
          title="Nome da loja"
          value={data.nameStore}
          error={erro.nameStore}
          onChange={(e) => handleChange('nameStore', e.target.value)}
        />

        <Input
          name="password"
          placeholder="••••••••"
          title="Senha"
          type="password"
          value={data.password}
          error={erro.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />

        <Input
          name="confirmPassword"
          placeholder="••••••••"
          title="Confirmar senha"
          type="password"
          value={data.confirmPassword}
          error={erro.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
        />

        <div className="flex flex-col gap-3">
          <label className="flex items-start gap-2 text-gray-300">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 accent-cyan-400 cursor-pointer"
              checked={consent}
              onChange={handleConsentChange}
            />
            <span className="text-body-sm">
              Li e aceito os
              <Link href={"/termos-uso"} className="text-blue-200 ml-1">Termos de Uso</Link>{' '} e
              <Link href={"/politica-privacidade"} className="text-blue-200 ml-1">Política de Privacidade</Link>
            </span>
          </label>
          {erro.consent && (
            <span className="text-red-400 text-sm ml-3">
              {erro.consent}
            </span>
          )}
        </div>

        <Button
          type="button"
          variant="secondary"
          className="w-full"
          aria-label="Criar conta para iniciar loja online"
          onClick={handleSubmit}
        >
          Criar conta gratuita
        </Button>
      </form>

      <div className="gap-3 flex flex-col mt-6">
        <p className="text-gray-300 text-center text-body-sm">
          Já tem uma conta? <Link href="/login-account" className="text-blue-200" aria-label="Fazer login">Faça login</Link>
        </p>

        <div className="h-px bg-gray-400" />

        <div className="flex flex-col items-center justify-center gap-2 text-gray-300 text-center md:flex-row md:gap-1">
          <TbLockPassword color="#00E5FF" />
          <p>Seus dados estão seguros</p>
        </div>
      </div>
    </>
  )
}