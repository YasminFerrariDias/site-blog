import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index follow',
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

export default function HomePage() {
  return (
    <>
      <LandingPage />
    </>
  )
}