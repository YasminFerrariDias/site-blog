import { Layout } from "@/components/layout"
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: '#CAMINHO POSTADO + A FOTO OG',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '#CAMINHO POSTADO + A FOTO OG',
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
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
