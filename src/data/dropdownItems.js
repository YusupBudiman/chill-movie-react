import { FaUser, FaStar } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

export const dropdownItems = (navigate, handleLogout) => [
  {
    label: "Profile Saya",
    icon: <FaUser />,
    onClick: () => navigate("/home/myprofile"),
    labelClass:
      "flex gap-1 items-center text-white hover:text-[#3254FF] transition-colors px-3 py-2 text-lg",
    spanClass: "text-[10px] lg:text-sm",
  },
  {
    label: "Ubah Premium",
    icon: <FaStar />,
    onClick: () => navigate("/home/premium"),
    labelClass:
      "flex gap-1 items-center text-white hover:text-[#3254FF] transition-colors px-3 py-2 text-lg",
    spanClass: "text-[10px] lg:text-sm",
  },
  {
    label: "Keluar",
    icon: <IoIosLogIn />,
    onClick: handleLogout,
    labelClass:
      "flex gap-1 items-center text-white hover:text-[#DB3A2A] transition-colors px-3 py-2 text-lg",
    spanClass: "text-[10px] lg:text-sm",
  },
];
