import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ListPremiumPackage = () => {
  const navigate = useNavigate();
  const ListPrice = [
    {
      title: "Individual",
      price: 49990,
      user: "1 Akun",
      benefit: ["Tidak ada iklan", "Kualitas 720p", "Download konten pilihan"],
    },
    {
      title: "Berdua",
      price: 79990,
      user: "2 Akun",
      benefit: ["Tidak ada iklan", "Kualitas 1080p", "Download konten pilihan"],
    },
    {
      title: "Keluarga",
      price: 159990,
      user: "5-7 Akun",
      benefit: ["Tidak ada iklan", "Kualitas 4K", "Download konten pilihan"],
    },
  ];

  return (
    <>
      <h1 className="text-xl font-bold md:text-[32px]">Pilih Paketmu</h1>
      <p className="text-sm font-medium mb-10 lg:text-lg">
        Temukan paket sesuai kebutuhanmu!
      </p>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-[72px]">
        {ListPrice.map((item, index) => (
          <div
            className="flex flex-col gap-6 w-[236px] h-[361px] p-6 bg-gradient-to-r from-[#5370D4] to-[#192DB7] rounded-xl
        text-xs"
            key={index}
          >
            <div className="flex justify-center items-center w-fit px-[20px] py-[10px] bg-[#3D4142] rounded-full ">
              <h3 className="text-base font-semibold lg:text-lg">
                {item.title}
              </h3>
            </div>

            <div className="flex flex-col items-left">
              <p className="">
                Mulai dari Rp{item.price.toLocaleString("en-US")}/bulan
              </p>
              <p>{item.user}</p>
            </div>

            <div className="flex flex-col gap-2">
              {item.benefit.map((benefit, i) => (
                <span className="flex gap-2 items-center" key={i}>
                  <FaCheck />
                  {benefit}
                </span>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#E7E3FC3B]"></div>

            <div className="flex flex-col items-center gap-1">
              <button
                className="w-full px-6.5 py-2.5 bg-white rounded-full text-sm font-bold text-[#0F1E93] 
                lg:text-base 
            hover:bg-[#E7E3FC3B] hover:text-white active:bg-[#0F1E93] active:text-white transition-all ease-in-out duration-200"
                onClick={() => navigate("/home/payment", { state: item })}
              >
                Langganan
              </button>
              <p className="text-xs">Syarat dan Ketentuan Berlaku</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPremiumPackage;
