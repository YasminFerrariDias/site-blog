import { FaCheck } from "react-icons/fa";


type InformationCardProps = {
  text: string
}

export function InformationCard({ text }: InformationCardProps) {
  return (
    <div
      className="bg-gray-400 w-full max-w-[550px] min-h-[74px] items-center 
      flex flex-col sm:flex-row px-5 text-gray-200 mb-4 rounded-xl 
      border border-gray-300 hover:border-cyan-400 py-4 
      hover:border-cyan-400/50 transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] gap-4"
    >
      <div className="bg-cyan-400/10 h-10 w-10 flex items-center justify-center rounded-xl">
        <FaCheck color="text-cyan-400" />
      </div>
      <span className="text-center sm:text-left">{text}</span>
    </div>
  )
}