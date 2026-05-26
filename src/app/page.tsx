import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index follow',
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

export default function HomePage() {
  return (
    <>
      <LandingPage />
    </>
  )
}