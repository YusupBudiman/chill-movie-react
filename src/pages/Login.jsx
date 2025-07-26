import LoginForm from "../components/LoginForm";
import BgLogin from "../assets/images/bg-login.jpg";
const Login = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <img
        src={BgLogin}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-[306px] md:w-[529px]">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
