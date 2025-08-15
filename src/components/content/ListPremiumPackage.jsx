import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ListPremiumPackage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-xl font-bold md:text-[32px]">Pilih Paketmu</h1>
      <p className="text-sm font-medium mb-10 md:text-lg">
        Temukan paket sesuai kebutuhanmu!
      </p>

      <div className="flex flex-col gap-8 md:flex-row md:gap-[72px]">
        <div
          className="flex flex-col gap-6 w-[236px] h-[361px] p-6 bg-gradient-to-r from-[#5370D4] to-[#192DB7] rounded-xl
        text-xs"
        >
          <h3 className="w-[111px] px-[20px] py-[10px] bg-[#3D4142] rounded-3xl text-base">
            Individual
          </h3>
          <div className="flex flex-col items-left">
            <p className="">Mulai dari Rp49,990/bulan</p>
            <p>1 Akun</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center">
              <FaCheck />
              Tidak Ada Iklan
            </span>
            <span className="flex gap-2 items-center">
              <FaCheck />
              Kualitas 720p
            </span>
            <span className="flex gap-2 items-center">
              <FaCheck />
              Download Konten Pilihan
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#E7E3FC3B]"></div>
          <div className="flex flex-col items-center gap-1">
            <button
              className="w-full h-10 bg-white rounded-full text-sm text-[#0F1E93] 
            hover:bg-[#E7E3FC3B] hover:text-white active:bg-[#0F1E93] transition-all ease-in-out duration-200"
              onClick={() => navigate("/home/payment")}
            >
              Langganan
            </button>
            <p className="text-xs font-normal">Syarat dan Ketentuan Berlaku</p>
          </div>
        </div>

        <div
          className="flex flex-col gap-6 w-[236px] h-[361px] p-6 bg-gradient-to-r from-[#5370D4] to-[#192DB7] rounded-xl
        text-xs"
        >
          <h3 className="w-[111px] px-[20px] py-[10px] bg-[#3D4142] rounded-3xl text-base">
            Individual
          </h3>
          <div className="flex flex-col items-left">
            <p className="">Mulai dari Rp49,990/bulan</p>
            <p>1 Akun</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center">
              <FaCheck />
              Tidak Ada Iklan
            </span>
            <span className="flex gap-2 items-center">
              <FaCheck />
              Kualitas 720p
            </span>
            <span className="flex gap-2 items-center">
              <FaCheck />
              Download Konten Pilihan
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#E7E3FC3B]"></div>
          <div className="flex flex-col items-center gap-1">
            <button
              className="w-full h-10 bg-white rounded-full text-sm text-[#0F1E93]
            hover:bg-[#E7E3FC3B] hover:text-white active:bg-[#0F1E93] transition-all ease-in-out duration-200"
            >
              Langganan
            </button>
            <p className="text-xs font-normal">Syarat dan Ketentuan Berlaku</p>
          </div>
        </div>

        <div
          className="flex flex-col gap-6 w-[236px] h-[361px] p-6 bg-gradient-to-r from-[#5370D4] to-[#192DB7] rounded-xl
        text-xs"
        >
          <h3 className="w-[111px] px-[20px] py-[10px] bg-[#3D4142] rounded-3xl text-base">
            Individual
          </h3>
          <div className="flex flex-col items-left">
            <p className="">Mulai dari Rp49,990/bulan</p>
            <p>1 Akun</p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center">
              <FaCheck />
              Tidak Ada Iklan
            </span>
            <span className="flex gap-2 items-center">
              <FaCheck />
              Kualitas 720p
            </span>
            <span className="flex gap-2 items-center">
              <FaCheck />
              Download Konten Pilihan
            </span>
          </div>
          <div className="w-full h-[1px] bg-[#E7E3FC3B]"></div>
          <div className="flex flex-col items-center gap-1">
            <button
              className="w-full h-10 bg-white rounded-full text-sm text-[#0F1E93]
            hover:bg-[#E7E3FC3B] hover:text-white active:bg-[#0F1E93] transition-all ease-in-out duration-200"
            >
              Langganan
            </button>
            <p className="text-xs font-normal">Syarat dan Ketentuan Berlaku</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPremiumPackage;
