'use client'

import { useState } from "react";
import ConfirmationForm from "./ui/logIn/confirmation-popup";
import LogInForm from "./ui/logIn/login-popup";
import EmitentTable from "./ui/main-page/emitent-table";

export default function Home() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visLog, setVisLog] = useState<boolean>(true);
  const [visCon, setVisCon] = useState<boolean>(false);
  const [emitentName, setEmitentName] = useState<string>("");

  return (
    <main>
      <div className="px-[168px] pb-[55px]">
        <h1 className="text-4xl mt-[40px] ml-[54px]">
          Личный кабинет Эмитента
        </h1>
        <div className="flex flex-col items-center max-w-[1104px] h-[744px] border-[0.5px] border-black rounded-[28px] bg-[#F1F1F1] mt-[23px] p-[27px]">
          <ConfirmationForm email={email} visCon={visCon} setVisCon={setVisCon}/>
          <LogInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} visLog={visLog} setVisLog={setVisLog} setVisCon={setVisCon}/>
          <p className="max-w-[900px] text-[34px]/[44px] mb-[24px]">Открытое акционерное общество "{emitentName}"</p>
          <EmitentTable emitentName={emitentName} setEmitentName={setEmitentName}/>
        </div>
     </div>
    </main>
  );
}
