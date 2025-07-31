import Logo from "../../assets/images/Logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { genres, bantuan } from "../../data/genres";

const Footer = () => {
  return (
    <footer
      className="flex flex-col min-h-[193px] bg-[#181A1C] p-5 border-t-[1px] border-[#E7E3FC3B] items-left text-white 
    md:flex-row md:px-20 md:py-15 md:justify-between md:items-center"
    >
      {/* Footer-Left */}
      <div className="footer-left flex flex-col mb-10 gap-4 md:mb-0 md:gap-6.5">
        <img src={Logo} alt="" className="w-[84px] h-6 md:w-[163px] md:h-11" />
        <p className="text-xs md:text-base">@2023 Chill All Rights Reserved</p>
      </div>
      {/* Footer-Center */}
      <div className="footer-center flex flex-col mb-2 md:mb-0">
        <h4 className="flex items-center justify-between gap-1 md:text-base md:font-bold md:mb-[15px]">
          Genre <MdKeyboardArrowRight className="w-6 h-6 md:hidden" />
        </h4>
        <div className="flex flex-wrap gap-7">
          {genres.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="hidden md:flex flex-col gap-[13px]"
            >
              {group.map((genre, index) => (
                <Link
                  key={index}
                  onClick={() => alert("Path belum dibuat")}
                  className="hover:text-[#C1C2C4] text-base font-medium"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-right flex flex-col">
        <h4 className="flex items-center justify-between gap-1 md:text-base md:font-bold md:mb-[15px]">
          Bantuan
          <MdKeyboardArrowRight className="w-6 h-6 md:hidden" />
        </h4>

        <div className="hidden md:flex flex-col gap-[13px]">
          {bantuan.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => alert("Path belum dibuat")}
              className="hover:text-[#C1C2C4]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
