import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";

const ModalVideo = ({ open, onClose, video, videos = [] }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  // Filter rekomendasi
  const rekomendasi = videos.filter((v) => v.nama !== video?.nama).slice(0, 3);

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
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#181A1C]/60">
      <div className="relative bg-[#181A1C] w-[90vw] max-w-[933px] rounded-2xl overflow-auto scrollbar-hide max-h-[90vh]">
        {/* Tombol close */}
        <button
          onClick={() => {
            setShowPlayer(false);
            onClose();
          }}
          className="absolute z-10 p-2 top-3 right-3 bg-[#181A1C] rounded-full"
          aria-label="Tutup"
        >
          <RiCloseLargeFill className="text-lg text-[#C1C2C4] font-bold" />
        </button>

        {/* Cover atau Video Player */}
        {!showPlayer ? (
          <div
            className="flex flex-col justify-end items-center w-full h-[350px] md:h-[554px] rounded-t-2xl relative"
            style={{
              backgroundImage: `url(${video?.imageLandscape})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] via-[#0E0F1080] to-[#181A1C]"></div>
            <div className="z-10 flex flex-col mb-10 gap-6 md:w-[773px]">
              <h2 className="text-[32px] font-bold text-white">
                {video?.nama}
              </h2>
              <div className="flex justify-between items-center text-white">
                <div className="flex gap-2.5">
                  <button
                    className="bg-[#0F1E93] px-10 py-2.5 rounded-full text-base font-bold
                    hover:bg-[#192DB7] active:bg-[#09147A] cursor-pointer"
                    onClick={() => setShowPlayer(true)}
                  >
                    Mulai
                  </button>
                  <button>
                    <CiCirclePlus className="text-[44px]" />
                  </button>
                </div>
                <button>sound</button>
              </div>
            </div>
          </div>
        ) : (
          // Media Player
          <div className="w-full aspect-video rounded-t-2xl overflow-hidden bg-black">
            <ReactPlayer
              src={video?.src}
              width="100%"
              height="100%"
              controls
              playing
            />
          </div>
        )}

        <div className="flex flex-col px-6 md:px-20 py-10 gap-10">
          {/* Deskripsi */}
          <div className="flex justify-between items-center gap-10">
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex gap-4 mb-2 text-[#C1C2C4] text-base">
                <span>Rating: {video?.rating}</span>
                <span>Like: {video?.like}</span>
                <span>Like: {video?.like}</span>
              </div>
              <p className="text-white text-base">
                {video?.desc ||
                  "Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan."}
              </p>
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex">
                <h4 className="pr-17 text-[#C1C2C4] text-base">Cast</h4>
                <p>
                  : Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain lain
                </p>
              </div>

              <div className="flex">
                <h4 className="pr-14 text-[#C1C2C4] text-base">Genre</h4>
                <p>: Aksi, Petualangan, Komedi</p>
              </div>
              <div className="flex">
                <h4 className=" pr-1 text-[#C1C2C4] text-base">Pembuat Film</h4>{" "}
                <p>: James Gunn</p>
              </div>
            </div>
          </div>

          {/* More Videos */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Rekomendasi</h2>
            <div className="flex gap-7 h-[365px]">
              {rekomendasi.map((item, idx) => (
                <div
                  key={idx}
                  className="flex z-10 rounded-lg cursor-pointer hover:scale-105 transition bg-[#23272B] overflow-hidden"
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
                  <img
                    src={item.imagePortrait}
                    alt={item.nama}
                    className="w-[234px] h-full object-cover"
                    onClick={() => alert("fitur belum tersedia")}
                  />
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
    </div>
  );
};

export default ModalVideo;
