import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-chill.png";
import User from "../../assets/images/avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="fixed top-0 w-full h-14 px-5 py-1.5 z-100  flex justify-between items-center p-4 bg-[#181a1c] text-[10px] text-white ">
      <nav className="flex gap-3 items-center">
        <Link to="#" className="">
          <img src={Logo} alt="" />
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
      <div className="profile flex items-center gap-1">
        <img src={User} alt="user" className="w-5 h5 rounded-xl" />
        <MdKeyboardArrowDown className="w-4 h-4 font-bold" />
      </div>
    </section>
  );
};

export default Navbar;
