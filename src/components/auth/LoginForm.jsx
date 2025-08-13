import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/images/Logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../../api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Username dan password harus diisi");
      return;
    }

    try {
      const res = await api.post("/users/login", {
        username: form.username,
        password: form.password,
      });

      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/home/series");
      } else {
        alert("Username atau kata sandi anda salah!");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal login");
    }
  };

  return (
    <div className="bg-[rgba(24,26,28,0.84)] text-white p-6 rounded-lg shadow-lg md:p-10">
      {/* Logo & Title */}
      <div className="text-center mb-5 md:mb-[37px]">
        <img
          src={Logo}
          alt="Logo MyApp"
          className="w-[94px] h-6 mx-auto mb-5 md:w-[163px] md:h-11 md:mb-[37px]"
        />
        <h1 className="text-lg font-bold mb-1 md:text-[32px] md:mb-2">Masuk</h1>
        <p className="text-[10px] font-light md:text-base">
          Selamat datang kembali!
        </p>
      </div>

      {/* Form Login */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Username */}
        <div className="flex flex-col mb-5 gap-0.75 md:gap-1.5 md:mb-[37px]">
          <label
            htmlFor="username"
            className="block text-[10px] font-medium md:text-lg"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
            placeholder="Masukkan username"
            className="w-full h-7 px-3 py-2 border border-[#E7E3FC3B] rounded-3xl text-white text-[9.24px]
            md:h-[50px] md:text-base md:px-5 md:py-3.5"
          />
        </div>

        {/* Input Password */}
        <div className="flex flex-col mb-1.5 gap-0.75 md:gap-1.5 md:mb-3">
          <label
            htmlFor="password"
            className="block text-[10px] font-medium md:text-lg"
          >
            Kata Sandi
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="Masukkan kata sandi"
              className="w-full h-7 px-3 py-2 border border-[#E7E3FC3B] rounded-3xl text-white text-[9.24px]
              md:h-[50px] md:text-base md:px-5 md:py-3.5"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-1 px-2 flex items-center text-[#9D9EA1]"
            >
              {showPassword ? (
                <FaEye className="w-3 h-3 md:w-5 md:h-5" />
              ) : (
                <FaEyeSlash className="w-3 h-3 md:w-5 md:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between text-[10px] mb-5 md:mb-[37px] md:text-base">
          <span className="text-[#C1C2C4]">
            Belum punya akun?
            <Link to="/register" className="font-medium text-white ml-1">
              Daftar
            </Link>
          </span>

          <Link
            to="#"
            onClick={() => console.log("Lupa kata sandi belum aktif")}
            className="font-medium text-white"
          >
            Lupa kata sandi?
          </Link>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-1 text-[10px] md:gap-2 md:text-base">
          <button
            type="submit"
            className="w-full h-7 py-2 px-3 bg-[#3D4142] text-white font-semibold rounded-2xl hover:bg-gray-600 active:bg-gray-800 transition-all duration-200 ease-in-out
            md:h-[50px] md:py-3.5 md:px-5 md:rounded-3xl"
          >
            Login
          </button>

          <span className="text-center text-[#9D9EA1]">Atau</span>

          <button
            type="button"
            onClick={() => console.log("Login Google belum aktif")}
            className="flex justify-center items-center gap-3 w-full h-7 py-2 px-3 border border-[#E7E3FC3B] bg-transparent text-white font-semibold rounded-2xl hover:bg-gray-600 active:bg-gray-800 transition-all duration-200 ease-in-out
            md:h-[50px] md:py-3.5 md:px-5 md:rounded-3xl"
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
