import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../store/slices/MovieSlice";
import MyListContent from "../components/content/MyListContent";

const MyList = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchMovies());
    }
  }, [dispatch, movies.length]);

  const allMedia = movies.filter(
    (item) => item.type === "movie" || item.type === "series"
  );

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
      <h3 className="text-xl font-bold mb-4">Daftar Saya</h3>

      <div className="flex flex-wrap justify-between gap-4 md:gap-7">
        {allMedia.map((item, index) => (
          <MyListContent key={index} media={[item]} />
        ))}

        {/* Spacer untuk layout */}
        <div className="w-[25%] invisible"></div>
        <div className="w-[25%] invisible"></div>
        <div className="w-[25%] invisible"></div>
      </div>
    </div>
  );
};

export default MyList;
