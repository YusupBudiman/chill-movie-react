import { MdDownload } from "react-icons/md";
import Advertisement from "../../assets/images/advertisements-off.png";
import MovieRoll from "../../assets/images/movie-roll.png";
import Messenger from "../../assets/images/messenger.png";
import Device from "../../assets/images/device.png";
import { Md4K } from "react-icons/md";

const PremiumPackage = () => {
  const features = [
    {
      icon: <MdDownload className="text-[28px] md:text-[40px]" />,
      text: "Download Konten Pilihan",
    },
    {
      icon: (
        <img
          src={Advertisement}
          alt=""
          className="size-[28px] md:size-[40px]"
        />
      ),
      text: "Tidak Ada Iklan",
    },
    {
      icon: (
        <img src={MovieRoll} alt="" className="size-[28px] md:size-[40px]" />
      ),
      text: "Tonton Semua Konten",
    },
    {
      icon: <Md4K className="text-[28px] md:text-[40px]" />,
      text: "Kualitas Maksimal Sampai Dengan 4K",
    },
    {
      icon: <img src={Device} alt="" className="size-[28px] md:size-[40px]" />,
      text: "Tonton di Tv, Tablet, Mobile, dan Laptop",
    },
    {
      icon: (
        <img src={Messenger} alt="" className="size-[28px] md:size-[40px]" />
      ),
      text: "Subtitle Untuk Konten Pilihan",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-6 md:text-[32px] md:mb-[72px]">
        Kenapa Harus Berlangganan?
      </h1>

      <div className="w-full flex items-center text-sm flex-wrap ">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-1/2 md:w-1/3 items-center gap-6 md:text-5xl md:gap-10"
          >
            {item.icon}
            <p className="items-center max-w-[120px] text-center mb-6 md:text-xl md:font-bold md:max-w-[180px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPackage;
