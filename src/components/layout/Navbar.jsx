import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/UserSlice";

import Logo from "../../assets/images/logo-chill.png";
import User from "../../assets/images/avatar.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import DropdownMenu from "../content/DropdownMenu";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Logout
  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate("/");
  };

  // Auto close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => setDropdownOpen(false), [location.pathname]);

  // List nav
  const navItems = [
    { label: "Series", path: "/home/series" },
    { label: "Film", path: "/home/film" },
    { label: "Daftar Saya", path: "/home/mylist" },
  ];

  // Active Nav Menu
  const navButtonClass = (path) =>
    location.pathname === path
      ? "text-[#3254FF] font-semibold"
      : "hover:text-[#3254FF] transition-colors cursor-pointer";

  return (
    <section className="fixed top-0 w-full h-14 px-5 py-1.5 z-50 flex justify-between items-center p-4 bg-[#181a1c] text-[10px] text-white md:h-[94px] md:px-20 md:py-[25px]">
      {/* Nav Left */}
      <nav className="flex gap-3 justify-center items-center md:text-lg md:gap-20 ">
        <button
          className="flex items-baseline gap-1 cursor-pointer"
          onClick={() => {
            if (
              ["/home/series", "/home/film", "/home/mylist"].includes(
                location.pathname
              )
            ) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/home");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }
          }}
        >
          <img
            src={Logo}
            alt="CHILL Logo"
            className="w-5 h-4.5 md:w-[29px] md:h-6.5"
          />
          <span className="hidden chill-font text-[32px] md:block">CHILL</span>
        </button>

        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className={navButtonClass(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Dropdown Right */}
      <div
        ref={dropdownRef}
        className="relative flex flex-col items-center justify-center gap-1"
      >
        <div
          className="profile flex items-center gap-1 cursor-pointer"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <img
            src={User}
            alt="user"
            className="w-5 h-5 rounded-xl md:w-10 md:h-10 md:rounded-3xl"
          />
          <MdKeyboardArrowRight
            className={`w-4 h-4 font-bold md:w-7 md:h-7 transition-all duration-200 ${
              dropdownOpen ? "rotate-90" : ""
            }`}
          />
        </div>

        {dropdownOpen && (
          <DropdownMenu navigate={navigate} handleLogout={handleLogout} />
        )}
      </div>
    </section>
  );
};

export default Navbar;
