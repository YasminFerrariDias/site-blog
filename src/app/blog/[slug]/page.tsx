import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { PostPage } from '@/templates/blog/post-page'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export default function PostSlugPage({ params }: Props) {
  const { slug } = params

  const post = allPosts.find((p) => p.slug === slug)

  if (!post) return notFound()

  return <PostPage post={post} />
}
