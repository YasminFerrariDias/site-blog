import { FaCheck } from "react-icons/fa";


type InformationCardProps = {
  text: string
}

export function InformationCard({ text }: InformationCardProps) {
  return (
    <div
      className="bg-gray-400 w-full max-w-[550px] min-h-[74px] items-center 
      flex flex-col sm:flex-row px-5 text-gray-200 mb-4 rounded-xl 
      border border-gray-300 hover:border-blue-300/50 hover:border-blue-200 py-4 
      transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] gap-4"
    >
      <div className="bg-blue-200/50 h-10 w-10 flex items-center justify-center rounded-xl">
        <FaCheck  />
      </div>
      <span className="text-center sm:text-left">{text}</span>
    </div>
  )
}