import PremiumPackageCotent from "../components/content/PremiumPackageContent";
import ListPremiumPackage from "../components/content/ListPremiumPackage";
const PremiumPackage = () => {
  return (
    <>
      <div className="mt-15 py-5 md:px-20 md:py-10 md:mt-24 ">
        <PremiumPackageCotent />
      </div>
      <div className="mx-4 flex flex-col px-20 py-10 items-center bg-[#22282A] lg:mx-0 ">
        <ListPremiumPackage />
      </div>
    </>
  );
};

export default PremiumPackage;
