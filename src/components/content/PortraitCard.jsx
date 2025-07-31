import { GoStarFill } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

const PortraitCard = ({ posters, topIndexes }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -262 : 262,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Left */}
      <button
        onClick={() => scroll("left")}
        className="hidden absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10  border-1 border-[#E7E3FC3B] bg-[#2F3334] hover:bg-[#222224] text-[white] p-2 rounded-full lg:block"
      >
        <FaArrowLeft />
      </button>

      {/* Scroll Right */}
      <button
        onClick={() => scroll("right")}
        className="hidden absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 border-1 border-[#E7E3FC3B] bg-[#2F3334] hover:bg-[#222224] text-white p-2 rounded-full lg:block"
      >
        <FaArrowRight />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth md:gap-7 scrollbar-hide"
      >
        {posters.map((item, index) => (
          <article
            key={index}
            className="relative min-w-[95.6px] h-[143px] bg-cover bg-center rounded-sm shadow-lg overflow-hidden
            md:min-w-[234px] md:h-[365px]"
            style={{ backgroundImage: `url(${item.imagePortrait})` }}
          >
            {/* Label Top 10 */}
            {topIndexes.includes(index) && (
              <span
                className="absolute top-0 right-1.5 w-3.5 bg-[#B71F1D] text-white text-center text-[6px] p-0.5  rounded-tr-xs rounded-bl-xs
              md:right-2.5 md:w-[31px] md:h-12 md:p-1 md:rounded-tr-sm md:rounded-bl-sm md:text-xs"
              >
                TOP 10
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default PortraitCard;
