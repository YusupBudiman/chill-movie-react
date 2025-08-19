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

  return (
    <footer
      className="flex flex-col mt-10 min-h-[193px] bg-[#181A1C] p-5 border-t-[1px] border-[#E7E3FC3B] items-left text-white 
    md:flex-row md:mt-15 md:px-20 md:py-15 md:justify-between md:items-center"
    >
      {/* Footer-Left */}
      <div className="footer-left flex flex-col mb-10 gap-4 md:mb-0 md:gap-6.5">
        <img src={Logo} alt="" className="w-[84px] h-6 md:w-[163px] md:h-11" />
        <p className="text-xs md:text-base">@2023 Chill All Rights Reserved</p>
      </div>
      {/* Footer-Center */}
      <div className="footer-center flex flex-col mb-2 md:mb-0">
        <button
          className="flex items-center justify-between gap-1 md:text-base md:font-bold md:mb-[15px] md:pointer-events-none"
          onClick={() => setShowGenreMobile((prev) => !prev)}
          aria-label="Tampilkan Genre"
        >
          Genre
          <MdKeyboardArrowRight
            className={`w-6 h-6 transition-all ease-in-out duration-200 ${
              showGenreMobile ? "rotate-90" : ""
            } md:hidden`}
          />
        </button>

        <div className="hidden md:flex flex-row gap-7">
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
          <div className="flex md:hidden flex-col gap-[13px] mt-2">
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
