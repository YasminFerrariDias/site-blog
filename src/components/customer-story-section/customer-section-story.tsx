import { PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700'
})

export const CustomerStorySection = () => {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12"> 
        <h2 className={`${ptSansCaption.className} text-heading-xl text-gray-100`}>
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          
        </div>
      </div>
    </section>
  )
}