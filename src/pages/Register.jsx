import RegisterForm from "../components/RegisterForm";
import BgRegister from "../assets/images/bg-daftar.jpg";
const Register = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <img
        src={BgRegister}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-[306px] md:w-[529px]">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
