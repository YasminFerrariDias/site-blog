import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  
  if (!router.isReady) {
    return <h2>Carregando...</h2>
  }

  const slug = router.query.slug;
  const slugText = Array.isArray(slug) ? slug.join("/") : slug ?? "";


  return (
    <h2>post: {slugText}</h2>
  )
}
 