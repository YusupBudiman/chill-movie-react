import PosterCard from "./PosterCard";
import posters from "../data/Posters";

const Content = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Posters</h2>
      <div className="flex flex-wrap gap-4 overflow-x-auto">
        {posters.map((item, index) => (
          <PosterCard
            key={index}
            nama={item.nama}
            imagePortrait={item.imagePortrait}
            imageLandscape={item.imageLandscape}
            rating={item.rating}
            like={item.like}
          />
        ))}
      </div>
    </section>
  );
};

export default Content;
