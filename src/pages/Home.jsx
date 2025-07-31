import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LandscapeCard from "../components/content/LandscapeCard";
import PortraitCard from "../components/content/PortraitCard";
import posters from "../data/Posters";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";

const Home = () => {
  const topIndexes = getTopIndexesByKey(posters, "like", 3);

  return (
    <>
      <Header />
      <main className=" bg-[#181a1c] text-white ">
        <section className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
          <h3 className="text-xl font-bold mb-5">Melanjutkan Tonton Film</h3>
          <LandscapeCard posters={posters} topIndexes={topIndexes} />
        </section>

        <section className="p-4 mb-5 md:px-20 ">
          <h3 className="text-xl font-bold mb-5 ">Rekomendasi Untukmu</h3>
          <PortraitCard posters={posters} topIndexes={topIndexes} />
        </section>

        <section className="p-4 mb-5 md:px-20 ">
          <h3 className="text-xl font-bold mb-5">Film Trendingu</h3>
          <PortraitCard posters={posters} topIndexes={topIndexes} />
        </section>

        <section className="p-4 mb-5 md:px-20 ">
          <h3 className="text-xl font-bold mb-5">Rilis Baru</h3>
          <PortraitCard posters={posters} topIndexes={topIndexes} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
