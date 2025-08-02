import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-[#181a1c] text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Home;
