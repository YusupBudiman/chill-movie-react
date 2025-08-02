import posters from "../data/Posters";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";
import PortraitCard from "../components/content/PortraitCard";

const MyList = () => {
  const topIndexes = getTopIndexesByKey(posters, "like", 5);

  return (
    <div className=" p-4 mt-15 mb-5 md:px-20 md:mt-24  ">
      <h3 className="text-xl font-bold mb-4">Daftar Saya</h3>
      <div className=" flex flex-wrap justify-center gap-4  md:gap-7 items-center">
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

export default MyList;
