import LoginForm from "../components/LoginForm";
import BgLogin from "../assets/images/bg-login.jpg";
const Login = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background image pakai <img> */}
      <img
        src={BgLogin}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Konten form login */}
      <div className="relative z-10 w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
