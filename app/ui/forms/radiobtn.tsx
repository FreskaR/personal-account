type RadioBtnProps = {
    text: string
    name: string
}
  
export const RadioButton = ({ text, name}: RadioBtnProps) => {
    return (
      <div className='flex items-center'>
        <input type="radio" name={name} className="appearance-none w-[16px] h-[16px] bg-[#FFEBC8] border border-black rounded-xl before:content-['\25CF'] before:text-[22px] before:relative before:top-[-10px] before:right-[-0.75px] checked:before:visible before:invisible"></input>
        <p className="ml-[9px] leading-[18px] text-sm">{text}</p>
      </div>
    )
}