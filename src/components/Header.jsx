import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-chill.png";
import User from "../assets/images/avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-[10px] text-white ">
      <nav className="flex gap-3 items-center">
        <Link to="/start" className="">
          <img src={Logo} alt="" />
        </Link>
        <Link to="/series" className="hover:underline">
          Series
        </Link>
        <Link to="/film" className="hover:underline">
          Film
        </Link>
        <Link to="/mylist" className="hover:underline">
          Daftar Saya
        </Link>
      </nav>
      <div className="profile flex items-center gap-1">
        <img src={User} alt="user" className="w-5 h5 rounded-xl" />
        <MdKeyboardArrowDown className="w-4 h-4 font-bold" />
      </div>
    </header>
  );
};

export default Header;
