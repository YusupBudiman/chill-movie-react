import PremiumPackageCotent from "../components/content/PremiumPackageContent";
import ListPremiumPackage from "../components/content/ListPremiumPackage";
const PremiumPackage = () => {
  return (
    <div className="">
      <div className="p-4 mt-15 mb-5 md:px-20 md:mt-24">
        <PremiumPackageCotent />
      </div>
      <div className="mx-4 flex flex-col px-20 py-10 items-center bg-[#22282A] lg:mx-0 ">
        <ListPremiumPackage />
      </div>
    </div>
  );
};

export default PremiumPackage;
