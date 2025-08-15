import { FaCheck } from "react-icons/fa6";
import Visa from "../../assets/images/card-debit/visa.png";
import MasterCard from "../../assets/images/card-debit/mastercard.png";
import Jcb from "../../assets/images/card-debit/jcb.png";
import AmericanExspress from "../../assets/images/card-debit/american_express.png";
import Bca from "../../assets/images/card-debit/bca.png";

const PaymentContent = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-bold mb-5 lg:text-[32px] lg:mb-10">
        Ringkasan Pembayaran
      </h1>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
        {/* Card Payment */}
        <div
          className="flex flex-col gap-6 w-full p-6 bg-gradient-to-r from-[#5370D4] to-[#192DB7] rounded-xl
            text-xs lg:w-[236px]"
        >
          <h3 className="w-[111px] px-[20px] py-[10px] bg-[#3D4142] rounded-3xl text-base">
            Individual
          </h3>
          <div className="flex flex-col items-left">
            <p className="text-sm">Mulai dari Rp49,990/bulan</p>
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
              className="w-[188px] h-10 bg-white rounded-full text-sm text-[#0F1E93] 
                hover:bg-[#E7E3FC3B] hover:text-white active:bg-[#0F1E93] transition-all ease-in-out duration-200"
            >
              Langganan
            </button>
            <p className="text-xs font-normal">Syarat dan Ketentuan Berlaku</p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4">
          {/* Metode Pembayaran */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold mb-4 lg:text-lg">
              Metode Pembayaran
            </h2>
            <div className="flex flex-col lg:flex-row gap-[29px] lg:gap-4">
              <button
                className="flex w-full h-12 border-1 border-[#E0E0E0] px-2.5 py-1 rounded-md items-center gap-2
              "
              >
                <div className="flex w-5 h-5 rounded-full border-2 border-[#7E8299] items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <img src={Visa} alt="" />
                <img src={MasterCard} alt="" />
                <img src={Jcb} alt="" />
                <img src={AmericanExspress} alt="" />
                <p className="text-xs lg:text-base">Kartu Debit/Kredit</p>
              </button>
              <button className="flex w-full h-12 border-1 border-[#E0E0E0] px-2.5 py-1 rounded-md items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-[#7E8299]"></div>
                <img src={Bca} alt="" className="rounded-full" />
                <p className="text-base">BCA Virtual Account</p>
              </button>
            </div>
          </div>

          {/* Voucher */}
          <div className="flex flex-col">
            <h2 className="text-base font-semibold mb-4">
              Kode Voucher (Jika ada)
            </h2>
            <div className="flex items-center justify-between gap-4 ">
              <input
                type="text"
                placeholder="Masukkan kode voucher"
                className="w-full h-[41px] px-2.5 py-1 border-1 border-[#C8CCD0] rounded-md"
              />
              <button className="w-[81px] h-9 px-3 py-2 bg-[#2F3334] rounded-full text-sm font-bold">
                Gunakan
              </button>
            </div>
          </div>

          <div>
            <h2 className="mb-4">Ringkasan Transaksi</h2>
            <div>
              <table className="w-full text-[#C1C2C4] mb-4 lg:w-1/2">
                <tbody>
                  <tr className="mb-2">
                    <th className="text-xs font-light text-left">
                      Paket Premium Individual
                    </th>
                    <td className="text-xs font-light text-right">Rp49,000</td>
                  </tr>

                  <tr className="mb-2">
                    <th className="text-xs font-light text-left">
                      Biaya Admin
                    </th>
                    <td className="text-xs font-light text-right">Rp3,000</td>
                  </tr>

                  <tr>
                    <th className="text-sm font-light text-left">
                      Total Pembayaran
                    </th>
                    <td className="text-white text-base font-light text-right">
                      Rp52,000
                    </td>
                  </tr>
                </tbody>
              </table>

              <button className="px-4 py-2 bg-[#09147A] text-sm font-bold rounded-full">
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentContent;
