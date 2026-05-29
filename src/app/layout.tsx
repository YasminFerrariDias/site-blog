import { Layout } from "@/components/layout"
import "@/styles/globals.css";
import { Metadata } from "next";
import { ToastProvider } from "./contexts/ToastProvider";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: siteUrl,
    siteName: 'Site.Set',
    locale: 'pt-BR',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/public/og-image.jpg`,
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
