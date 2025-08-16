import ProfileForm from "../components/content/ProfileForm";
import posters from "../data/Posters";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";
import MyListContent from "../components/content/MyListContent";

const MyProfile = () => {
  const topIndexes = getTopIndexesByKey(posters, "like", 5);
  return (
    <div className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
      {/* Profile */}
      <div className="mb-5">
        <ProfileForm />
      </div>

      {/* My List Film */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-4">Daftar Saya</h1>
        <div className="flex flex-wrap justify-between gap-4 md:gap-7">
          {posters.map((items, index) => (
            <MyListContent
              key={index}
              posters={[items]}
              topIndexes={topIndexes}
            />
          ))}

          <div
            className="relative min-w-[95px] h-[143px] bg-cover bg-center rounded-sm shadow-lg overflow-hidden
            md:min-w-[234px] md:h-[365px] invisible"
          ></div>
          <div
            className="relative min-w-[95px] h-[143px] bg-cover bg-center rounded-sm shadow-lg overflow-hidden
            md:min-w-[234px] md:h-[365px] invisible"
          ></div>
          <div
            className="relative min-w-[95px] h-[143px] bg-cover bg-center rounded-sm shadow-lg overflow-hidden
            md:min-w-[234px] md:h-[365px] invisible"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
