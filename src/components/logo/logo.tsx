import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial" araia-label="Ir para página inicial">
      <Image src="/logo.svg"
        alt="Logo do Site"
        width={116}
        height={32}
      />
    </Link>
  )
}