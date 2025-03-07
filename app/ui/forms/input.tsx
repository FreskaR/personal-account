type InputProps = {
  placeholder: string
}

export const InputForm = ({
  placeholder,
}: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-[27px] max-w-[557px] w-full border-[0.5px] border-black text-[14px]/[18px] placeholder:text-[#C4C4C4] pl-[12px]"
    ></input>
  )
}
