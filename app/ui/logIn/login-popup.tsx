'use client'

import { useState } from "react";
import { InputLogin } from "./login-input";
import LoginBtn from "./login-btn";

interface Props {
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    visLog: boolean,
    setVisLog: React.Dispatch<React.SetStateAction<boolean>>,
    setVisCon: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LogInForm ({email, setEmail, password, setPassword, visLog, setVisLog, setVisCon}: Props) {

    if(!visLog) return null
    
    const onClick = () => {
        setVisLog(false) 
        setVisCon(true) 
    }

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen backdrop-blur-sm">
            <div className="flex flex-col items-center w-[664px] h-[447px] border-black rounded-[28px] border-[0.5px] bg-[#F1F1F1]/75 pt-[58px]">
                <p className="text-[36px]/[47px] mb-[54px]">Личный кабинет эмитента</p>
                <div className="mb-[22px]"><InputLogin value={email} setValue={setEmail} placeholder="Логин*" /></div>
                <div className="mb-[48px]"><InputLogin value={password} setValue={setPassword} placeholder="Пароль*"/></div>
                <div className="mb-[27px]" onClick={onClick} ><LoginBtn /></div>
                <p className="text-[20px]/[26px]">Забыл(а) пароль</p>
            </div>
        </div>
    )
}