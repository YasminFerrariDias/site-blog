type InputProps = {
  placeholder: string
  title: string
  type?: 'text' | 'password'
}

export function Input({ placeholder, title, type = 'text' }: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-200 font-medium ml-3 mb-1">{title}</label>
      <input
        type={type}
        className="bg-gray-400 w-full h-[54px] px-4 rounded-xl placeholder:text-gray-300 text-gray-50 border border-gray-50"
        placeholder={placeholder}
        about="dc"
      />
    </div>
  )
}