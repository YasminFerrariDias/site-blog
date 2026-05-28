import { Button } from "@/components/ui/button";
import { Input } from "../../components/input";
import { TbLockPassword } from "react-icons/tb";

type FormCreateAccount = {
  handle: () => void
}

export function FormCreateAccount({ handle }: FormCreateAccount) {
  return (
    <>
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
            <span className="text-body-sm">
              Li e aceito os
              <a className="text-blue-200 ml-1">Termos de Uso</a> e
              <a className="text-blue-200 ml-1">Política de Privacidade</a>
            </span>
          </label>
        </div>

        <Button
          type="button"
          variant="secondary"
          className="w-full"
          onClick={handle}
        >
          Criar conta gratuita
        </Button>
      </form>

      <div className="gap-3 flex flex-col mt-6">
        <p className="text-gray-300 text-center text-body-sm">
          Já tem uma conta? <a className="text-blue-200" href="./login-account">Faça login</a>
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