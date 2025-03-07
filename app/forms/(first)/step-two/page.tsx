import { Step } from "@/app/ui/forms/step"

export default function Page () {
  return (
    <div className="max-w-[1104px] h-[744px] border-[0.5px] border-black rounded-[28px] bg-[#F1F1F1] mt-[23px] p-[45px]">
      <Step back='/forms/step-one' next=''>
        <div>
         </div>
      </Step>
    </div>
  );
}