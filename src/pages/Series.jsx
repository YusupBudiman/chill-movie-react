import LandscapeCard from "../components/content/LandscapeCard";
import PortraitCard from "../components/content/PortraitCard";
import Hero from "../components/layout/Hero";
import posters from "../data/Posters";
import { useState } from "react";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";
const topIndexes = getTopIndexesByKey(posters, "like", 3);
import PopUpSeries from "../components/content/PopUpSeries";
const Series = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };
  return (
    <>
      <PopUpSeries
        open={showModal}
        onClose={handleCloseModal}
        video={selectedVideo}
        videos={posters}
      />
      <Hero />

      <section className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
        <h3 className="text-xl font-bold mb-5">Melanjutkan Tonton Series</h3>
        <LandscapeCard posters={posters} topIndexes={topIndexes} />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5 ">Series Persembahan Chill</h3>
        <PortraitCard
          posters={posters}
          topIndexes={topIndexes}
          onCardClick={handleCardClick}
        />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5">Top Rating Series Hari ini</h3>
        <PortraitCard
          posters={posters}
          topIndexes={topIndexes}
          onCardClick={handleCardClick}
        />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5">Series Trending</h3>
        <PortraitCard
          posters={posters}
          topIndexes={topIndexes}
          onCardClick={handleCardClick}
        />
      </section>

      <section className="p-4 mb-5 md:px-20 ">
        <h3 className="text-xl font-bold mb-5">Rilis Baru</h3>
        <PortraitCard
          posters={posters}
          topIndexes={topIndexes}
          onCardClick={handleCardClick}
        />
      </section>
    </>
  );
};

export default Series;
