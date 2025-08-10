import { useEffect, useState } from "react";
import avatar from "../../assets/images/avatar.png";
import warning from "../../assets/images/warning.png";
import { MdOutlineUploadFile } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const ProfileForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Ambil data user dari localStorage saat komponen mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setForm({
        username: userData.Username || "",
        email: userData.email || "",
        password: userData.password || "",
      });
    }
  }, []);

  // Handle perubahan input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="bg-[#3D4142] rounded-xl p-6 items-center">
          <div className="flex flex-col gap-5 ">
            <div className="flex gap-5 items-center">
              <img src={warning} alt="" className="w-[78px] h-[78px]" />
              <div className="flex flex-col">
                <h4 className="text-lg font-bold">Berlangganan</h4>
                <p className="text-sm font-light">
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                  Kamu!
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-[154px] px-5.5 py-1.5 bg-[#2F3334] font-bold text-xs rounded-full">
                Mulai Berlangganan
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mb-8 lg:gap-8">
          <h1 className="text-[20px] font-bold lg:text-[32px]">Profile Saya</h1>
          <div className="flex gap-6 items-center">
            <img
              src={avatar}
              alt="foto profile"
              className="w-20 h-20 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <button className="px-3 py-2 border-1 border-[#3254FF] rounded-full text-[#3254FF] text-sm font-bold">
                Ubah Foto
              </button>
              <label className="flex items-center text-xs text-[#C1C2C4]">
                <MdOutlineUploadFile className="text-2xl mr-1" />
                Maksimal 2MB
              </label>
            </div>
          </div>

          <div className="flex flex-col text-white gap-8">
            <div className="bg-[#22282A] flex gap-2 px-4 py-2 items-center rounded-lg border-1 border-[#E7E3FC3B]">
              <div className="w-full flex flex-col">
                <label className="text-[#9D9EA1] text-sm font-semibold">
                  Nama Pengguna
                </label>
                <input
                  disabled
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="text-base font-medium"
                />
              </div>
              <button>
                <MdEdit className="text-2xl" />
              </button>
            </div>

            <div className="bg-[#22282A] flex gap-2 px-4 py-2 items-center rounded-lg border-1 border-[#E7E3FC3B]">
              <div className="w-full flex flex-col">
                <label className="text-[#9D9EA1] text-sm font-semibold">
                  Email
                </label>
                <input
                  disabled
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="text-base font-medium"
                />
              </div>
            </div>

            <div className="bg-[#22282A] flex gap-2 px-4 py-2 items-center rounded-lg border-1 border-[#E7E3FC3B]">
              <div className="w-full flex flex-col">
                <label className="text-[#9D9EA1] text-sm font-semibold">
                  Kata Sandi
                </label>
                <input
                  disabled
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="text-base font-medium"
                />
              </div>
              <button>
                <MdEdit className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
