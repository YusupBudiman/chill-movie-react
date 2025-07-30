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
            <div className="absolute top-2 left-2 bg-[#0F1E93] text-white text-[6px] px-1 py-0.5 rounded-2xl font-bold z-20 shadow">
              Episode Baru
            </div>

            {topIndexes.includes(index) && (
              <div className="absolute top-0 right-1.5 w-3.5 bg-[#B71F1D] text-white text-center text-[6px] p-0.5  rounded-tr-xs rounded-bl-xs">
                TOP 10
              </div>
            )}

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
