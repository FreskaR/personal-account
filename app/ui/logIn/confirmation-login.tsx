
interface Props {
  placeholder: string
}

export const ConfirmationInput = ({placeholder}: Props) => {

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-[42px] w-[286px] border-[1px] border-[#BDBDBD] rounded-[15px] text-[14px]/[18px] placeholder:opacity-[25] pl-[21px] "
    ></input>
  )
}
