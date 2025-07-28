import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PosterCard from "../components/content/PosterCard";
import PortraitCars from "../components/content/PortraitCars";
import posters from "../data/Posters";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";

const Home = () => {
  const topIndexes = getTopIndexesByKey(posters, "like", 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#181a1c] text-white">
        <section className="p-4 mt-15 mb-5">
          <h3 className="text-xl font-bold mb-5">Melanjutkan Tonton Film</h3>
          <PosterCard posters={posters} topIndexes={topIndexes} />
        </section>

        <section className="p-4 mb-5">
          <h3 className="text-xl font-bold mb-5">Rekomendasi Untukmu</h3>
          <PortraitCars posters={posters} topIndexes={topIndexes} />
        </section>

        <section className="p-4 mb-5">
          <h3 className="text-xl font-bold mb-5">Film Trendingu</h3>
          <PortraitCars posters={posters} topIndexes={topIndexes} />
        </section>

        <section className="p-4 mb-5">
          <h3 className="text-xl font-bold mb-5">Rilis Baru</h3>
          <PortraitCars posters={posters} topIndexes={topIndexes} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
