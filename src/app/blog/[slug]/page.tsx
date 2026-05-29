
import { notFound } from "next/navigation";
import { PostPage } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { siteConfig } from '@/lib/site-config'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author?.name }],
    robots: 'index, follow',
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      images: [
        {
          url: post.image,
          alt: post.title
        }
      ]
    }
  }
}

export const revalidate = 60

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return <PostPage post={post} />
}