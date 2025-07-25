import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Logo from "../assets/images/Logo.svg";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      navigate("/home");
    } else {
      alert("Email dan password harus diisi");
    }
  };

  return (
    <section className="bg-[rgba(24,26,28,0.84)] text-white p-6 rounded-lg shadow-lg ">
      {/* Logo dan teks */}
      <div className="text-center">
        <img src={Logo} alt="Logo" className="w-16 h-16 mx-auto mb-3" />
        <h1 className="text-2xl font-bold">Selamat Datang</h1>
        <p className="text-sm text-gray-500">Masuk untuk melanjutkan</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:border-blue-500"
            placeholder="••••••••"
          />
        </div>

        {/* Daftar & Lupa Password */}
        <div className="flex justify-between text-sm mt-2">
          <Link to="/register" className="text-blue-600 hover:underline">
            Daftar
          </Link>
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Lupa Password?
          </Link>
        </div>

        {/* Tombol Login */}
        <div className="button-login display flex flex-col gap-2 mt-4 items-center">
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>

          <span className="text-gray-500">atau</span>

          {/* Login dengan Gmail */}
          <button
            type="button"
            onClick={() => alert("Login Google belum aktif")}
            className="w-full py-2 border border-gray-300 flex items-center justify-center gap-2 rounded-md hover:bg-gray-50"
          >
            <FcGoogle className="text-xl" />
            Login dengan Gmail
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
