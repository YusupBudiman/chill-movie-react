import BgHero from "../../assets/images/hero.png";
import { CiCircleInfo } from "react-icons/ci";
import { PiSpeakerSlashFill } from "react-icons/pi";
import TbRating18Plus from "../../assets/images/18-plus.png";
const Hero = () => {
  return (
    <section
      className="relative top-14  w-full h-[225px] bg-cover bg-center text-white flex items-end justify-center
      "
      style={{
        backgroundImage: `url(${BgHero})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000000]  to-[#181A1C]"></div>
      <div className="relative w-[320px] z-10 ">
        <h1 className="text-2xl md:text-6xl font-bold mb-3">
          Duty After School
        </h1>
        <p className="text-xs md:text-xl mb-3 line-clamp-2">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>

        <div className="button-group  h-[25px]  flex justify-between  mb-3">
          <div className="flex gap-2 items-center">
            <button className="py-1 px-3 bg-[#0F1E93] text-xs  text-white font-bold  rounded-xl transition">
              Mulai
            </button>
            <button className="flex gap-1 py-1 px-3 bg-[#22282A] text-xs items-center text-white font-bold  rounded-xl transition">
              <CiCircleInfo />
              Selengkapnya
            </button>
            <img src={TbRating18Plus} alt="" className="w-[30px]" />
          </div>

          <button className="p-1.5  text-xs  text-white font-bold border-1  rounded-2xl transition">
            <PiSpeakerSlashFill className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
