import { GoStarFill } from "react-icons/go";

const PortraitCars = ({ posters, topIndexes }) => {
  return (
    <>
      <div className="flex gap-4 overflow-x-auto">
        {posters.map((item, index) => (
          <article
            key={index}
            className="relative min-w-[95.6px] h-[143px] bg-cover bg-center rounded-sm shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${item.imagePortrait})` }}
          >
            {/* 🏅 Label Top 10 */}
            {topIndexes.includes(index) && (
              <span className="absolute top-0 right-1.5 w-3.5 bg-[#B71F1D] text-white text-center text-[6px] p-0.5  rounded-tr-xs rounded-bl-xs">
                TOP 10
              </span>
            )}
          </article>
        ))}
      </div>
    </>
  );
};

export default PortraitCars;
