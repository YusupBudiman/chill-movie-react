import posters from "../data/Posters";
import getTopIndexesByKey from "../utils/getTopIndexesByKey";
import MyListContent from "../components/content/MyListContent";

const MyList = () => {
  const topIndexes = getTopIndexesByKey(posters, "like", 5);

  return (
    <div className=" p-4 mt-15 mb-5 md:px-20 md:mt-24  ">
      <h3 className="text-xl font-bold mb-4">Daftar Saya</h3>

      <div className="flex flex-wrap justify-between gap-4 md:gap-7">
        {posters.map((items, index) => (
          <MyListContent
            key={index}
            posters={[items]}
            topIndexes={topIndexes}
          />
        ))}

        <div className="w-[25%] invisible"></div>
        <div className="w-[25%] invisible"></div>
        <div className="w-[25%] invisible"></div>
      </div>
    </div>
  );
};

export default MyList;
