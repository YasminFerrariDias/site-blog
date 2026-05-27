import BlogList from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas e estratégias para impulsionar seu négocio',
  robots: 'index follow',
  openGraph: {
    title: 'Blog',
    description: 'Dicas e estratégias para impulsionar seu négocio',
    url: '#CAMINHO POSTADO + A FOTO OG',
    siteName: 'Site.Set',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '#CAMINHO POSTADO + A FOTO OG',
        width: 800,
        height: 600,
        alt: 'Site.Set - Blog'
      }
    ]
  }
}

export default function BlogListPage() {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Suspense fallback={<div className="container py-24 text-gray-200 text-center">Carregando posts...</div>}>
      <BlogList posts={sortedPosts} />
    </Suspense>
  )
}