import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/images/Logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ Username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.Username && form.password) {
      navigate("/home");
    } else {
      alert("Username dan password harus diisi");
    }
  };

  return (
    <div className=" bg-[rgba(24,26,28,0.84)] text-white p-6 rounded-lg shadow-lg">
      {/* Logo & Judul */}
      <div className="text-center mb-5">
        <img
          src={Logo}
          alt="Logo MyApp"
          className="w-[94px] h-6 mx-auto mb-5"
        />
        <h1 className="text-lg font-bold">Masuk</h1>
        <p className="text-[10px] font-light">Selamat datang kembali!</p>
      </div>

      {/* Form Login */}
      <form
        onSubmit={handleSubmit}
        name="login-form"
        className="space-y-4"
        aria-label="Form masuk pengguna"
      >
        {/* Input Username */}
        <div>
          <label htmlFor="Username" className="block text-[10px] font-medium">
            Username
          </label>
          <input
            type="Username"
            id="Username"
            name="Username"
            value={form.Username}
            onChange={handleChange}
            required
            autoComplete="Username"
            placeholder="Masukkan username"
            className="mt-1 w-full h-7 px-3 py-2 border border-[#E7E3FC3B] rounded-xl text-white text-[9.24px] "
          />
        </div>

        {/* Input Password */}
        <div>
          <label htmlFor="password" className="block text-[10px] font-medium">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              placeholder="Masukkan kata sandi"
              className="mt-1 w-full h-7 px-3 py-2 border border-[#E7E3FC3B] rounded-xl text-white text-[9.24px]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 px-2 mt-1 flex items-center text-[#9D9EA1]"
            >
              {showPassword ? (
                <FaEyeSlash className="w-3 h-3" />
              ) : (
                <FaEye className="w-3 h-3" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div
          role="navigation"
          aria-label="Link tambahan"
          className="flex justify-between text-[10px] mt-1.5"
        >
          <span className="text-[#C1C2C4]">
            Belum punya akun?
            <Link to="/register" className="font-medium text-white ml-1">
              Daftar
            </Link>
          </span>

          <Link to="/forgot-password" className="font-medium  text-white">
            Lupa Password?
          </Link>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-1 text-[10px] ">
          <button
            type="submit"
            className="w-full h-7 py-2 px-3 bg-[#3D4142] text-white font-semibold rounded-2xl hover:bg-gray-600 active:bg-gray-800  transition-all duration-200 ease-in-out"
          >
            Login
          </button>

          <span className="text-center text-[#9D9EA1]">Atau</span>

          <button
            type="button"
            aria-label="Masuk dengan Google"
            onClick={() => alert("Login Google belum aktif")}
            className="flex justify-center items-center gap-3 w-full h-7 py-2 px-3 border border-[#E7E3FC3B] bg-transparent text-white font-semibold rounded-2xl hover:bg-gray-600 active:bg-gray-800  transition-all duration-200 ease-in-out"
          >
            <FcGoogle className="text-xs" />
            Masuk dengan Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
