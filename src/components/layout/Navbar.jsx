import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-chill.png";
import User from "../../assets/images/avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section
      className="fixed top-0 w-full h-14 px-5 py-1.5 z-100  flex justify-between items-center p-4 bg-[#181a1c] text-[10px] text-white
    md:h-[94px] md:px-20 md:py-[25px]"
    >
      <nav className="flex gap-3 items-center md:text-lg md:gap-20">
        <Link to="#" className="flex items-baseline gap-1">
          <img src={Logo} alt="" className="md:w-[29px] md:h-6.5" />
          <span className="hidden chill-font text-[32px] md:block">CHILL</span>
        </Link>
        <Link to="#" className="hover:underline">
          Series
        </Link>
        <Link to="#" className="hover:underline">
          Film
        </Link>
        <Link to="#" className="hover:underline">
          Daftar Saya
        </Link>
      </nav>

      <div className="relative flex flex-col items-center justify-center gap-1">
        <div
          className="profile flex items-center gap-1 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={User}
            alt="user"
            className="w-5 h5 rounded-xl md:w-10 md:h-10 md:rounded-3xl"
          />
          <MdKeyboardArrowDown className="w-4 h-4 font-bold md:w-7 md:h-7 " />
        </div>

        {dropdownOpen && (
          <div
            className="absolute py-1 top-[34px] right-0 z-150 flex flex-col w-[113px] text-[10px] bg-[#181a1c] rounded-sm
          md:w-[156px] text-sm md:top-16 md:right-auto"
          >
            <Link
              to="#"
              className="flex gap-1 items-center text-white hover:text-[#3254FF] active:text-[#243FDB] transition-colors px-3 py-2"
            >
              <FaUser className="w-4 h-4 md:w-4.5 md:h-4.5 hover:text-[#3254FF]" />
              Profile Saya
            </Link>
            <Link
              to="#"
              className="flex gap-1 items-center text-white hover:text-[#3254FF] active:text-[#243FDB] transition-colors px-3 py-2"
            >
              <FaStar className="w-4 h-4 md:w-4.5 md:h-4.5" /> Ubah Premium
            </Link>
            <Link
              to="/"
              className="flex gap-1 items-center text-white hover:text-[#3254FF] active:text-[#243FDB] transition-colors px-3 py-2"
            >
              <IoIosLogIn className="w-4 h-4 md:w-4.5 md:h-4.5" />
              Keluar
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
