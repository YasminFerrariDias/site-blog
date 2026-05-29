import { Button } from "@/components/ui/button";
import { Input } from "../../components/input";
import { TbLockPassword } from "react-icons/tb";
import { useToastContext } from "@/hooks/use-toast-context";
import { useState } from "react";
import { z } from "zod";
import { loginSchema } from "@/schemas/login-schema";
import Link from "next/link";

export function FormLoginAccount() {
  const toast = useToastContext();

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [erro, setErro] = useState<{
    email?: string,
    password?: string
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

  function validateForm() {
    const result = loginSchema.safeParse(data)

    if (!result.success) {
      const erros: any = {}
      result.error.issues.forEach((issue: z.ZodIssue) => {
        erros[issue.path[0]] = issue.message
      })

      return erros
    }

    return {}
  }

  function handleSubmit() {
    const erros = validateForm()

    if (Object.keys(erros).length > 0) {
      setErro(erros)

      toast.error({
        heading: "Erro no login",
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
    })
  }

  function handleInformationAccount() {
    toast.info({
      heading: "Demonstração!",
      message: "Login social disponível apenas na versão completa do projeto",
      duration: 3000
    });
  };

  return (
    <>
      <form className="gap-4 flex flex-col">
        <Input
          name="email"
          placeholder="seu@email"
          title="E-mail"
          value={data.email}
          error={erro.email}
          onChange={(e) => handleChange('email', e.target.value)}
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

        <div className="flex flex-col gap-3">
          <label className="flex flex-row gap-2 text-gray-300 items-center" htmlFor="Lermbrar-me">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 accent-cyan-400 cursor-pointer"
            />
            <span className="text-body-sm">
              Lembrar-me
            </span>
          </label>
        </div>

        <Button
          type="button"
          variant="secondary"
          className="w-full"
          onClick={handleSubmit}
          aria-label="Entrar na conta"
        >
          Entrar
        </Button>
      </form>

      <div className="gap-3 flex flex-col mt-6">
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="h-px bg-gray-300 w-full" />
          <p className="min-w-fit text-gray-300 text-body-sm">ou continue com</p>
          <div className="h-px bg-gray-300 w-full" />
        </div>

        <div className="flex justify-between gap-4 my-4">
          <Button variant="none" className="w-full" onClick={handleInformationAccount} aria-label="Entrar com Google">
            Google
          </Button>
          <Button variant="none" className="w-full" onClick={handleInformationAccount} aria-label="Entrar com Github">
            Github
          </Button>
        </div>

        <p className="text-gray-300 text-center text-body-sm">
          Ainda não tem uma conta? <Link className="text-blue-200" href="/create-account" aria-label="Criar conta grátis">Criar conta grátis</Link>
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