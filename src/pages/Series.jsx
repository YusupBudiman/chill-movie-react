import LandscapeCard from "../components/content/LandscapeCard";
import PortraitCard from "../components/content/PortraitCard";
import Hero from "../components/layout/Hero";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, openPopup, closePopup } from "../store/slices/MovieSlice";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";
import PopUpSeries from "../components/content/PopUpSeries";

const Series = () => {
  const dispatch = useDispatch();
  const { movies, selectedVideo, isOpen } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const seriesList = movies.filter((item) => item.type === "series");
  const topIndexes = getTopIndexesByKey(seriesList, "like", 3);

  return (
    <>
      <PopUpSeries
        open={isOpen}
        onClose={() => dispatch(closePopup())}
        video={selectedVideo}
        videos={seriesList}
      />
      <Hero />

      <section className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
        <h3 className="text-xl font-bold mb-5">Melanjutkan Tonton Series</h3>
        <LandscapeCard items={seriesList} topIndexes={topIndexes} />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5 ">Series Persembahan Chill</h3>
        <PortraitCard
          items={seriesList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5">Top Rating Series Hari ini</h3>
        <PortraitCard
          items={seriesList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5">Series Trending</h3>
        <PortraitCard
          items={seriesList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5">Rilis Baru</h3>
        <PortraitCard
          items={seriesList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>
    </>
  );
};

export default Series;
