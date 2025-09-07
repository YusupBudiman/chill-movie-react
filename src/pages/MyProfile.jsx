import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileForm from "../components/content/ProfileForm";
import MyListContent from "../components/content/MyListContent";
import { fetchMovies, openPopup } from "../store/slices/MovieSlice";

const MyProfile = () => {
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

  if (loading) {
    return <div className="text-white p-4">Loading...</div>;
  }

  return (
    <div className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
      {/* Profile */}
      <div className="mb-5">
        <ProfileForm />
      </div>

      {/* My List Film & Series */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-4">Daftar Saya</h1>
        <div className="flex flex-wrap justify-between gap-4 md:gap-7">
          {allMedia.map((item, index) => (
            <MyListContent
              key={index}
              media={[item]}
              onCardClick={() => dispatch(openPopup(item))}
            />
          ))}

          {/* Placeholder invisible cards */}
          <div className="w-[25%] invisible"></div>
          <div className="w-[25%] invisible"></div>
          <div className="w-[25%] invisible"></div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
