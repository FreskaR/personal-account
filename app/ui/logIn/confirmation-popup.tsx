'use client'

import { useState } from "react";
import LoginBtn from "./login-btn";
import { ConfirmationInput } from "./confirmation-login";

interface Props {
    email: string,
    visCon: boolean,
    setVisCon: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ConfirmationForm ({email, visCon, setVisCon}: Props) {
    if(!visCon) return null;

    return (
        <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen backdrop-blur-sm">
            <div className="flex flex-col items-center w-[664px] h-[447px] border-black rounded-[28px] border-[0.5px] bg-[#F1F1F1]/75 pt-[58px]">
                <p className="text-[36px]/[47px] mb-[10px]">Введите код подтвеждения</p>
                <p className=" max-w-[500px] text-[24px]/[26px] text-center mb-[20px]">На почту: "{email}" был отправлен шестизначный код</p>
                <div className="mb-[48px]"><ConfirmationInput placeholder="Код"/></div>
                <div className="mb-[27px]" onClick={() => setVisCon(false)}><LoginBtn /></div>
            </div>
        </div>
    );
}