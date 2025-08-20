import Logo from "../../assets/images/Logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { genres, bantuan } from "../../data/genres";
import { useState } from "react";
const Footer = () => {
  // sorting genres A-Z
  const sortedGenres = genres
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  // setting genres 4 cols
  const maxCol = 4;
  const itemsPerCol = Math.ceil(sortedGenres.length / maxCol);
  const genreColumns = [];
  for (let i = 0; i < maxCol; i++) {
    genreColumns.push(
      sortedGenres.slice(i * itemsPerCol, (i + 1) * itemsPerCol)
    );
  }

  // State toggle genre mobile
  const [showGenreMobile, setShowGenreMobile] = useState(false);

  // State toggle Help mobile
  const [showHelpMobile, setShowHelpMobile] = useState(false);

  return (
    <footer
      className="flex flex-col mt-10 min-h-[193px] bg-[#181A1C] p-5 border-t-[1px] border-[#E7E3FC3B] items-left text-white 
    lg:flex-row lg:mt-15 lg:px-20 lg:py-15 lg:justify-between lg:items-center"
    >
      {/* Footer-Left */}
      <div className="footer-left flex flex-col mb-10 gap-4 lg:mb-0 lg:gap-6.5">
        <img src={Logo} alt="" className="w-[84px] h-6 md:w-[163px] md:h-11" />
        <p className="text-xs md:text-base">@2023 Chill All Rights Reserved</p>
      </div>
      {/* Footer-Center */}
      <div className="footer-center flex flex-col mb-2 lg:mb-0">
        <button
          className="flex items-center justify-between gap-1 lg:text-base lg:font-bold lg:mb-[15px] lg:pointer-events-none"
          onClick={() => setShowGenreMobile((prev) => !prev)}
          aria-label="Tampilkan Genre"
        >
          Genre
          <MdKeyboardArrowRight
            className={`w-6 h-6 transition-all ease-in-out duration-200 ${
              showGenreMobile ? "rotate-90" : ""
            } lg:hidden`}
          />
        </button>

        <div className="hidden lg:flex flex-row gap-7">
          {genreColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-[13px]">
              {col.map((genre, idx) => (
                <Link
                  key={idx}
                  onClick={() => alert("Path belum dibuat")}
                  className="hover:text-[#C1C2C4] text-base font-medium"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Mobile Genre */}
        {showGenreMobile && (
          <div className="flex lg:hidden flex-col gap-[13px] mt-2">
            {sortedGenres.map((genre, idx) => (
              <Link
                key={idx}
                onClick={() => alert("Path belum dibuat")}
                className="hover:text-[#C1C2C4] text-base font-medium"
              >
                {genre.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer Right */}
      <div className="footer-right flex flex-col">
        <button
          className="flex items-center justify-between gap-1 lg:text-base lg:font-bold lg:mb-[15px]"
          onClick={() => setShowHelpMobile((prev) => !prev)}
        >
          Bantuan
          <MdKeyboardArrowRight
            className={`w-6 h-6 lg:hidden transition-all ease-in-out duration-200 ${
              showHelpMobile ? "rotate-90" : ""
            }`}
          />
        </button>
        {/* Dekstop Help */}
        <div className="hidden lg:flex flex-col gap-[13px]">
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

        {/* Mobile Help */}
        {showHelpMobile && (
          <div className="flex lg:hidden flex-col gap-[13px] mt-2">
            {bantuan.map((item, index) => (
              <Link
                key={index}
                onClick={() => alert("Path belum dibuat")}
                className="hover:text-[#C1C2C4] text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
