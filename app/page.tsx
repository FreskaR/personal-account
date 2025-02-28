import FormWrapper from "./ui/forms/form-wrapper";
import FormsMain from "./ui/forms/forms-main";

export default function Home() {
  return (
    <main>
      <div className="px-[168px] pb-[55px]">
        <h1 className="text-4xl mt-[40px] ml-[54px]">
          Личный кабинет Эмитента
        </h1>
        <FormWrapper/>
     </div>
    </main>
  );
}
