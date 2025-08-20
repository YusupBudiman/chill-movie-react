import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";

const PopUpSeries = ({ open, onClose, video, videos = [] }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  // Filter rekomendasi
  const rekomendasi = videos.filter((v) => v.nama !== video?.nama);

  //scroll body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#181A1C]/95">
      <div
        className="relative bg-[#181A1C] w-[90vw] max-h-[90vh] rounded-md lg:max-w-[933px] lg:rounded-2xl overflow-auto
       scrollbar-hide drop-shadow-[0_16px_40px_rgba(231,227,252,0.04)]"
      >
        {/* Btn close */}
        <button
          onClick={() => {
            setShowPlayer(false);
            onClose();
          }}
          className="absolute z-10 p-1 top-3 right-3 bg-[#181A1C] lg:p-2 rounded-full"
          aria-label="Tutup"
        >
          <RiCloseLargeFill className="text-xs lg:text-lg text-[#C1C2C4] font-bold" />
        </button>

        {/* Cover and Video Player */}
        {!showPlayer ? (
          <div
            className="relative w-full h-[190px] flex flex-col justify-end items-center rounded-t-sm md:h-[350px] lg:h-[554px] lg:rounded-t-2xl "
            style={{
              backgroundImage: `url(${video?.imageLandscape})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] via-[#0E0F1080] to-[#181A1C]"></div>
            <div className="w-full px-[20px] z-10 mb-[20px] flex flex-col gap-2 lg:mb-10 lg:gap-6 lg:px-20">
              <h2 className="text-base font-bold text-white lg:text-[32px] ">
                {video?.nama}
              </h2>
              <div className="flex justify-between items-center text-white">
                <div className="flex gap-2 lg:gap-2.5">
                  <button
                    className="bg-[#0F1E93] px-3 py-1 text-xs font-bold rounded-full lg:px-10 lg:py-2.5 lg:text-base
                    hover:bg-[#192DB7] active:bg-[#09147A] cursor-pointer"
                    onClick={() => setShowPlayer(true)}
                  >
                    Mulai
                  </button>
                  <button>
                    <CiCirclePlus className="text-[24px] lg:text-[44px]" />
                  </button>
                </div>
                <button>sound</button>
              </div>
            </div>
          </div>
        ) : (
          // Video Player
          <div className="w-full aspect-video rounded-t-sm lg:rounded-t-2xl overflow-hidden">
            <ReactPlayer
              src={video?.src}
              width="100%"
              height="100%"
              controls
              playing
            />
          </div>
        )}

        <div className="flex flex-col px-[20px] gap-[20px] py-4 lg:px-20 lg:py-10 lg:gap-10">
          {/* Desc */}
          <div className="flex flex-col justify-between items-center gap-4 lg:gap-10 lg:flex-row">
            <div className="flex flex-col gap-1 flex-1">
              <div className="w-1/2 flex gap-1.5 text-[#C1C2C4] text-[10px] font-semibold lg:gap-4 lg:mb-2 lg:text-base">
                <span>{video?.rating}</span>
                <span>{video?.like}</span>
                <span>{video?.like}</span>
                <span>{video?.like}</span>
              </div>
              <p className="text-white text-[10px] lg:text-base">
                {video?.desc ||
                  "Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan."}
              </p>
            </div>

            <div className="flex flex-col flex-1 text-[10px] font-base text-white lg:text-base">
              <div className="flex">
                <h4 className="pr-11.5 lg:pr-17 text-[#C1C2C4]">Cast</h4>
                <p>
                  : Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain lain
                </p>
              </div>

              <div className="flex">
                <h4 className="pr-9.5 lg:pr-14 text-[#C1C2C4] ">Genre</h4>
                <p>: Aksi, Petualangan, Komedi</p>
              </div>
              <div className="flex">
                <h4 className=" pr-1 text-[#C1C2C4]">Pembuat Film</h4>{" "}
                <p>: James Gunn</p>
              </div>
            </div>
          </div>

          {/* More Videos */}
          <div>
            <h2 className="text-white text-xs mb-1 font-bold  lg:text-lg lg:mb-4">
              Episode
            </h2>

            {rekomendasi.map((item, idx) => (
              <div
                key={idx}
                className="flex w-full  px-2 py-[5px] gap-2 justify-around items-center z-10  overflow-hidden bg-[#424242]"
                onClick={() => {
                  setShowPlayer(false);
                  onClose();
                  setTimeout(() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("openModalVideo", { detail: item })
                      );
                    }
                  }, 200);
                }}
              >
                <div className="w-[30%] flex gap-2 justify-center items-center">
                  <h3 className="">1</h3>
                  <div className="flex flex-col ">
                    <img
                      className=" w-[58px] md:min-w-[170px] max-h-[33px] md:min-h-[96px] border-b-1 border-[#FF0000]"
                      src={item.imageLandscape}
                      alt={item.nama}
                      onClick={() => alert("fitur belum tersedia")}
                    />
                    <div className="flex z-10 "></div>
                  </div>
                </div>

                <div className="w-[70%] text-[10px] md:text-lg">
                  <h3 className="font-semibold">{item.nama}</h3>
                  <p className="font-normal text-[#C1C2C4] line-clamp-1  md:line-clamp-2">
                    {item.like}
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                  </p>
                </div>
              </div>
            ))}
            {rekomendasi.length === 0 && (
              <div className="text-white text-sm ">
                Tidak ada rekomendasi lain.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpSeries;
