import { CallToAction } from "@/templates/landing-page/sections"
import { Footer } from "./footer"
import { Header } from "./header"
import { Inter, PT_Sans_Caption } from 'next/font/google'

type LayoutProps = {
  children: React.ReactNode
}

// Configuração com fallbacks e display swap para evitar timeout
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap', // Não bloqueia a renderização
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans',
  display: 'swap',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${inter.variable} ${ptSansCaption.variable} relative flex min-h-screen flex-col dark bg-gray-700 font-sans`}>
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">
        {children}
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}