import { GoStarFill } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const LandscapeCard = ({ items = [] }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -312 : 312,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="hidden absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 border-1 border-[#E7E3FC3B] bg-[#2F3334] hover:bg-[#222224] text-white p-2 rounded-full lg:block"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 border-1 border-[#E7E3FC3B] bg-[#2F3334] hover:bg-[#222224] text-white p-2 rounded-full lg:block"
      >
        <FaArrowRight />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto md:gap-2.5 scrollbar-hide"
      >
        {items.map((item, index) => {
          const avgRating = item.ratings?.length
            ? (
                item.ratings.reduce((acc, r) => acc + r.score, 0) /
                item.ratings.length
              ).toFixed(1)
            : 0;

          return (
            <article
              key={index}
              className="relative min-w-[309px] h-[151px] bg-cover bg-center rounded-xl shadow-lg md:w-[302px] md:h-[162px]"
              style={{ backgroundImage: `url(${item.imgLandscape})` }}
            >
              <div className="absolute top-2 left-2 bg-[#0F1E93] text-white text-[6px] px-1 py-0.5 rounded-2xl font-bold z-20 shadow md:px-2.5 md:py-1 md:text-xs">
                Episode Baru
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="w-full flex absolute bottom-0 p-4 justify-between items-center text-white z-10">
                <h2 className="text-sm font-bold">{item.title}</h2>
                <p className="flex font-light items-center gap-1 text-xs">
                  <GoStarFill className="w-[10px] h-[10px]" /> {avgRating}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default LandscapeCard;
