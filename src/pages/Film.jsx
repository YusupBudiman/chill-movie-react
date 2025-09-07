import LandscapeCard from "../components/content/LandscapeCard";
import PortraitCard from "../components/content/PortraitCard";
import Hero from "../components/layout/Hero";
import { useSelector, useDispatch } from "react-redux";
import { openPopup, closePopup, fetchMovies } from "../store/slices/MovieSlice";
import { useEffect } from "react";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";
import PopUpFilm from "../components/content/PopUpFilm";

const Film = () => {
  const dispatch = useDispatch();
  const { movies, selectedVideo, isOpen } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movieList = movies.filter((item) => item.type === "movie");
  const topIndexes = getTopIndexesByKey(movieList, "like", 3);

  return (
    <>
      <PopUpFilm
        open={isOpen}
        onClose={() => dispatch(closePopup())}
        video={selectedVideo}
        videos={movieList}
      />
      <Hero />

      <section className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
        <h3 className="text-xl font-bold mb-5">Melanjutkan Tonton Film</h3>
        <LandscapeCard items={movieList} topIndexes={topIndexes} />
      </section>

      <section className="p-4 mb-5 md:px-20">
        <h3 className="text-xl font-bold mb-5">Film Persembahan Chill</h3>
        <PortraitCard
          items={movieList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>

      <section className="p-4 mb-5 md:px-20">
        <h3 className="text-xl font-bold mb-5">Top Rating Film Hari ini</h3>
        <PortraitCard
          items={movieList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>

      <section className="p-4 mb-5 md:px-20">
        <h3 className="text-xl font-bold mb-5">Film Trending</h3>
        <PortraitCard
          items={movieList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>

      <section className="p-4 mb-5 md:px-20">
        <h3 className="text-xl font-bold mb-5">Rilis Baru</h3>
        <PortraitCard
          items={movieList}
          topIndexes={topIndexes}
          onCardClick={(video) => dispatch(openPopup(video))}
        />
      </section>
    </>
  );
};

export default Film;
