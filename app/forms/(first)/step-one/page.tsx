import { Step } from "@/app/ui/forms/step"
import { TextInput } from "@/app/ui/forms/input"
import { CheckBox } from "@/app/ui/forms/checkbox"
import { RadioButton } from "@/app/ui/forms/radiobtn";

export default function Page () {
  return (
    <div className="max-w-[1104px] h-[744px] border-[0.5px] border-black rounded-[28px] bg-[#F1F1F1] mt-[23px] p-[45px]" >
      <Step back='' next='/forms/step-two'>
          <p className="text-[#B82116] text-[15px]/[19px] font-bold text-center mb-[31px]">Распоряжение Эмитента на список к ОСА</p>
          <div className="border-[0.5px] border-black rounded-[28px] pt-[23px] pl-[26px] pb-[29px] mb-[45px]">
            <p className="font-bold leading-[18px] text-sm mb-[9px]">Предоставить:</p>
            <div className="flex flex-col gap-[9px]">
              <CheckBox text="Список лиц, имеющих право на участие в общем собрании акционеров" />
              <CheckBox text="Список лиц, осуществляющих права по ценным бумагам" />
              <CheckBox text="Список лиц, имеющих право на участие в общем собрании акционеров, без персональных данных и данных о волеизъявлении для ознакомления (п. 4. Ст. 51 ФЗ об АО)." />
            </div>
          </div>
          <div className="border-[0.5px] border-black rounded-[28px] pt-[23px] pl-[26px] mb-[45px]">
            <p className="text-[#B82116] text-[14px]/[18px] font-bold text-center mb-[20px]">Сведения об общем собрании акционеров:</p>
            <div className="flex gap-[9px]">
              <RadioButton name="first" text="Советом директоров"/>
              <RadioButton name="first" text="Вторая"/>
            </div>
          </div>
      </Step>
     </div>
  );
}
