import { FaStar, FaUser } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

const DropdownMenu = ({ navigate, handleLogout }) => {
  const listDropdown = [
    {
      label: "Profile Saya",
      icon: <FaUser className="w-4 h-4 md:w-5 md:h-5" />,
      onClick: () => navigate("/home/myprofile"),
      labelClass:
        "flex gap-1 items-center text-[10px] lg:text-sm text-white hover:text-[#3254FF] transition-colors px-3 py-2 text-lg",
    },
    {
      label: "Ubah Premium",
      icon: <FaStar className="w-4 h-4 md:w-5 md:h-5" />,
      onClick: () => navigate("/home/premium"),
      labelClass:
        "w-full flex gap-1 text-[10px] lg:text-sm items-center text-white hover:text-[#3254FF] transition-colors px-3 py-2 text-lg",
    },
    {
      label: "Keluar",
      icon: <IoIosLogIn className="w-4 h-4 md:w-5 md:h-5" />,
      onClick: handleLogout,
      labelClass:
        "flex gap-1 items-center text-[10px] lg:text-sm text-white hover:text-[#DB3A2A] transition-colors px-3 py-2 text-lg",
    },
  ];

  return (
    <div
      className="absolute py-1 top-[34px] right-0 z-150 flex flex-col w-[116px] bg-[#181a1c] rounded-sm
        md:w-[156px] md:top-16 md:right-auto"
    >
      {listDropdown.map((item, index) => (
        <button key={index} onClick={item.onClick} className={item.labelClass}>
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default DropdownMenu;
