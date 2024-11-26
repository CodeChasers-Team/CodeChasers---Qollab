import FormSection from "../../components/login/FormSection";
import ImageSection from "../../components/login/ImageSection";

const LoginPage = () => {
  return (
    <div>
      <div className="flex flex-row w-screen min-h-screen">
        <div className="w-1/2">
          <FormSection/>
        </div>
        <div className="w-1/2 bg-primary-200 p-2">
          <ImageSection url={`../assets/login/foto-login.png`}/>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
