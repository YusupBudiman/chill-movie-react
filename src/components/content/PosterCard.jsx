import { GoStarFill } from "react-icons/go";

const PosterCard = ({ posters, topIndexes }) => {
  return (
    <>
      <div className="flex gap-4 overflow-x-auto ">
        {posters.map((item, index) => (
          <article
            key={index}
            className="relative min-w-[309px] h-[151px] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${item.imageLandscape})` }}
          >
            {/* 🏅 Label Top 10 */}
            {topIndexes.includes(index) && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold z-20 shadow">
                TOP 10
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            <div className="w-full flex absolute bottom-0 p-4 justify-between items-center text-white z-10">
              <h2 className="text-sm font-bold">{item.nama}</h2>
              <p className="flex font-light items-center gap-1 text-xs">
                <GoStarFill className="w-[10px] h-[10px]" /> {item.rating}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default PosterCard;
