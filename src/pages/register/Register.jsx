import FormSection from "../../components/register/FormSection";
import ImageSection from "../../components/login/ImageSection";

const RegisterPage = () => {
  return (
    <div className="flex flex-row w-screen min-h-screen">
      <div className="w-1/2">
        <FormSection/>
      </div>
      <div className="w-1/2 bg-primary-200 p-2">
        <ImageSection url={`../assets/register/foto-register.png`}/>
      </div>
    </div>
  );
};

export default RegisterPage;
