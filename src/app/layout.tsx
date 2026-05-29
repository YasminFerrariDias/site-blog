import { Layout } from "@/components/layout"
import "@/styles/globals.css";
import { Metadata } from "next";
import { ToastProvider } from "./contexts/ToastProvider";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: `${siteConfig.url}/blog`,
    siteName: 'Site.Set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 800,
        height: 600,
        alt: 'Site.Set'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastProvider>
          <Layout>
            {children}
          </Layout>
        </ToastProvider>
      </body>
    </html>
  )
}
