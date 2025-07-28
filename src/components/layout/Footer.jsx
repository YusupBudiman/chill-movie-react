import Logo from "../../assets/images/Logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const genres = [
    [
      { name: "Aksi", path: "/genre/aksi" },
      { name: "Petualangan", path: "/genre/petualangan" },
      { name: "Drama", path: "/genre/drama" },
      { name: "Romantis", path: "/genre/romantis" },
    ],
    [
      { name: "Horor", path: "/genre/horor" },
      { name: "Komedi", path: "/genre/komedi" },
      { name: "Sci-Fi", path: "/genre/sci-fi" },
      { name: "Fantasi", path: "/genre/fantasi" },
    ],
    [
      { name: "Thriller", path: "/genre/thriller" },
      { name: "Dokumenter", path: "/genre/dokumenter" },
      { name: "Misteri", path: "/genre/misteri" },
      { name: "Musikal", path: "/genre/musikal" },
    ],
    [
      { name: "Keluarga", path: "/genre/keluarga" },
      { name: "Kriminal", path: "/genre/kriminal" },
      { name: "Sejarah", path: "/genre/sejarah" },
      { name: "Anime", path: "/genre/anime" },
    ],
  ];

  return (
    <footer className="flex flex-col min-h-[193px] bg-[#181A1C] p-5 border-t-[1px] border-[#E7E3FC3B] items-left text-white ">
      <div className="flex flex-col footer-left mb-10 gap-4">
        <img src={Logo} alt="" className="w-[84px] h-6" />
        <p className="text-xs">@2023 Chill All Rights Reserved</p>
      </div>

      <div className="flex flex-col footer-center mb-2 ">
        <h4 className="flex items-center justify-between  gap-1">
          Genre <MdKeyboardArrowRight className="w-6 h-6" />
        </h4>
        <div className="flex flex-wrap gap-2">
          {genres.map((group, groupIndex) => (
            <div key={groupIndex} className="hidden md:flex flex-col gap-1">
              {group.map((genre, index) => (
                <Link
                  key={index}
                  // to={genre.path}
                  onClick={() => alert("Path belum dibuat")}
                  className="hover:text-[#E7E3FC]"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-right ">
        <h4 className="flex items-center justify-between  gap-1">
          Bantuan
          <MdKeyboardArrowRight className="w-6 h-6" />
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
