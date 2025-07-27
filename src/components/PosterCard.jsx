import { GoStarFill } from "react-icons/go";

function PosterCard({ nama, imageLandscape, rating }) {
  return (
    <article
      className="relative min-w-[309px] h-[151px]  bg-cover bg-center rounded-xl shadow-lg overflow-hidden
      "
      style={{ backgroundImage: `url(${imageLandscape})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      {/* overlay */}
      <div className="w-full flex absolute bottom-0 p-4 justify-between items-center text-white z-10">
        <h2 className="text-sm font-bold">{nama}</h2>
        <p className="flex font-light items-center gap-1 text-xs">
          <GoStarFill className="w-[10px] h-[10px]" /> {rating}
        </p>
      </div>
    </article>
  );
}

export default PosterCard;
