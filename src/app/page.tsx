import { LandingPage } from "@/templates/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Site.set',
  description: 'Venda seus produtos como afiliado em um único lugar',
  robots: 'index follow',
  openGraph: {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    url: 'https://site-blog-ochre.vercel.app/',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://site-blog-ochre.vercel.app/public/og-image.jpg',
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