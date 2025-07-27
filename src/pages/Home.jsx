import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import PosterCard from "../components/PosterCard";
import posters from "../data/Posters";

const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#181a1c] text-white">
        <section className="p-4 ">
          <h3 className="text-2xl font-bold mb-4">Melanjutkan Tonton Film</h3>
          <div className="flex gap-4 overflow-x-auto ">
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
