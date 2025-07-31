import BgHero from "../../assets/images/hero.png";
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { PiSpeakerSlashFill } from "react-icons/pi";
import { TbRating18Plus } from "react-icons/tb";
import { PiSpeakerHighFill } from "react-icons/pi";
const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <section
      className="relative top-14  w-full h-[225px] bg-cover bg-center text-white flex items-end justify-center
      md:h-[587px] md:top-23.5"
      style={{
        backgroundImage: `url(${BgHero})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000000]  to-[#181A1C]"></div>
      <div className="relative w-full px-5 md:px-20 z-10">
        <h1 className="text-2xl md:text-6xl font-bold mb-3 lg:mb-5">
          Duty After School
        </h1>
        <p className="text-xs mb-3 line-clamp-2 md:w-[668px] md:text-lg md:line-clamp-none lg:mb-10">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
          Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
          siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
          dalam perang.
        </p>

        <div className="button-group flex justify-between mb-3 ">
          <div className="flex gap-2 items-center ">
            <button
              className="py-1 px-3 bg-[#0F1E93] text-xs  text-white font-bold  rounded-xl transition
            lg:px-6.5 lg:py-2.5 lg:rounded-3xl lg:text-base"
            >
              Mulai
            </button>
            <button
              className="flex gap-1 py-1 px-3 bg-[#22282A] text-xs items-center text-white font-bold  rounded-xl transition
            lg:px-6.5 lg:py-2.5 lg:rounded-3xl lg:text-base"
            >
              <CiCircleInfo className="lg:w-6 lg:h-6" />
              Selengkapnya
            </button>

            <TbRating18Plus className="w-[30px] h-[25px] stroke-1 lg:w-[52px] lg:h-[45px]" />
          </div>

          <button
            className="p-1.5 text-[#C1C2C4] font-bold border-1 border-[#C1C2C4]  rounded-3xl transition 
            lg:p-2.5"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <PiSpeakerHighFill className="w-3 h-3 md:w-6 md:h-6" />
            ) : (
              <PiSpeakerSlashFill className="w-3 h-3 md:w-6 md:h-6" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
