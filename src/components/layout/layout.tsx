import { CallToAction } from "@/templates/landing-page/sections"
import { Footer } from "./footer"
import { Header } from "./header"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col dark bg-gray-700 font-sans">
      <Header />
      <main className="flex-1 flex flex-col mt-10 mb-12">
        {children}
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}