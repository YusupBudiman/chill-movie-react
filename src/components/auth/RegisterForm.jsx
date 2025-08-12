import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("Semua field harus diisi");
      return;
    }

    try {
      await api.post("/register", {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      alert("Registrasi berhasil, silakan login");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal registrasi");
    }
  };

  return (
    <div className="bg-[rgba(24,26,28,0.84)] text-white p-6 rounded-lg shadow-lg md:p-10">
      <h1 className="text-lg font-bold mb-4 md:text-[32px]">Daftar</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full h-7 px-3 py-2 border rounded-3xl text-white text-[9.24px] md:h-[50px] md:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full h-7 px-3 py-2 border rounded-3xl text-white text-[9.24px] md:h-[50px] md:text-base"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full h-7 px-3 py-2 border rounded-3xl text-white text-[9.24px] md:h-[50px] md:text-base"
        />

        <button
          type="submit"
          className="w-full h-7 py-2 bg-[#3D4142] text-white font-semibold rounded-2xl hover:bg-gray-600 md:h-[50px] md:rounded-3xl"
        >
          Daftar
        </button>

        <p className="text-[10px] mt-2 md:text-base">
          Sudah punya akun?{" "}
          <Link to="/" className="font-medium text-white">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
