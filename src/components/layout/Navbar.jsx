import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo-chill.png";
import User from "../../assets/images/avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { FaStar, FaUser } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const navButtonClass = (path) =>
    location.pathname === path
      ? "text-[#3254FF] font-semibold"
      : "hover:text-[#3254FF] transition-colors";

  return (
    <section
      className="fixed top-0 w-full h-14 px-5 py-1.5 z-100 flex justify-between items-center p-4 bg-[#181a1c] text-[10px] text-white
      md:h-[94px] md:px-20 md:py-[25px]"
    >
      {/* Kiri: Logo dan Menu */}
      <nav className="flex gap-3 justify-center items-center md:text-lg md:gap-20">
        <button
          onClick={() => {
            navigate(location.pathname);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-baseline gap-1"
        >
          <img
            src={Logo}
            alt="CHILL Logo"
            className="w-5 h-4.5 md:w-[29px] md:h-6.5"
          />
          <span className="hidden chill-font text-[32px] md:block">CHILL</span>
        </button>

        <button
          onClick={() => navigate("/home/series")}
          className={navButtonClass("/home/series")}
        >
          Series
        </button>

        <button
          onClick={() => navigate("/home/film")}
          className={navButtonClass("/home/film")}
        >
          Film
        </button>

        <button
          onClick={() => navigate("/home/mylist")}
          className={navButtonClass("/home/mylist")}
        >
          Daftar Saya
        </button>
      </nav>

      {/* Kanan: Avatar */}
      <div className="relative flex flex-col items-center justify-center gap-1">
        <div
          className="profile flex items-center gap-1 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={User}
            alt="user"
            className="w-5 h-5 rounded-xl md:w-10 md:h-10 md:rounded-3xl"
          />
          <MdKeyboardArrowDown className="w-4 h-4 font-bold md:w-7 md:h-7 " />
        </div>

        {dropdownOpen && (
          <div
            className="absolute py-1 top-[34px] right-0 z-150 flex flex-col w-[113px] text-[10px] bg-[#181a1c] rounded-sm
            md:w-[156px] text-sm md:top-16 md:right-auto"
          >
            <button
              onClick={() => navigate("/home/myprofile")}
              className="flex gap-1 items-center text-white hover:text-[#3254FF] transition-colors px-3 py-2"
            >
              <FaUser className="w-4 h-4 md:w-4.5 md:h-4.5" />
              Profile Saya
            </button>

            <button
              onClick={() => navigate("/home/premium")}
              className="flex gap-1 items-center text-white hover:text-[#3254FF] transition-colors px-3 py-2"
            >
              <FaStar className="w-4 h-4 md:w-4.5 md:h-4.5" />
              Ubah Premium
            </button>

            <button
              onClick={handleLogout}
              className="flex gap-1 items-center text-white hover:text-[#3254FF] transition-colors px-3 py-2"
            >
              <IoIosLogIn className="w-4 h-4 md:w-4.5 md:h-4.5" />
              Keluar
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
