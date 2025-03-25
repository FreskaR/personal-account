import LogInForm from "./ui/logIn/login-form";
import logInForm from "./ui/logIn/login-form";

export default function Home() {
  return (
    <main>
      <div className="px-[168px] pb-[55px]">
        <h1 className="text-4xl mt-[40px] ml-[54px]">
          Личный кабинет Эмитента
        </h1>
        <div className="max-w-[1104px] h-[744px] border-[0.5px] border-black rounded-[28px] bg-[#F1F1F1] mt-[23px] p-[45px]">
          <LogInForm />
        </div>
     </div>
    </main>
  );
}
