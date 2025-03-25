'use client'

import { useState } from "react"

type InputProps = {
  placeholder: string
}

export const InputLogin = ({
  placeholder,
}: InputProps) => {

  const [inputText, setInputText] = useState("")

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => setInputText(e.target.value)}
      className="h-[42px] w-[286px] border-[1px] border-[#BDBDBD] rounded-[15px] text-[14px]/[18px] placeholder:opacity-[25] pl-[21px] "
      value={inputText}
    ></input>
  )
}
