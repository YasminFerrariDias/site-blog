type InputProps = {
  placeholder: string
  title: string
  name: string
  value: string
  error?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'password'
}

export function Input({ placeholder, title, name, value, error, onChange, type = 'text' }: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-gray-200 font-medium ml-3 mb-1" htmlFor="{title}">{title}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-400 w-full h-[54px] px-4 rounded-xl placeholder:text-gray-300 text-gray-50 border border-gray-50"
        placeholder={placeholder}
      />
      {error && (
        <span className="text-red-400 text-sm ml-3 mt-1">
          {error}
        </span>
      )}
    </div>
  )
}