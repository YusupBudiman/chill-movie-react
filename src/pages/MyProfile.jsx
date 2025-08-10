import ProfileForm from "../components/content/ProfileForm";
import posters from "../data/Posters";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";
import PortraitCard from "../components/content/PortraitCard";

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
        <div className="flex flex-wrap justify-between gap-4">
          {posters.map((items, index) => (
            <PortraitCard
              key={index}
              posters={[items]}
              topIndexes={topIndexes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
