import { PostPage as Post, type PostPageProps } from '@/templates/blog'
import { allPosts } from 'contentlayer/generated'

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />
}

export const getStaticPaths = (async () => {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: false
  }
})

export const getStaticProps = (async (context) => {
  const { slug } = context.params as { slug: string };
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
})
