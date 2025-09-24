import { categories, packages } from "@/const/const";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Categories() {
  function displayPackages(cat) {
    const pack = packages.filter((item) => item.category.includes(cat));

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pack.map((pkg) => (
          <Link href={pkg.path} key={pkg.id}>
            <div className="flex flex-col gap-6 border-slate-200 p-4 rounded-lg shadow-lg  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src="/images/tour1.avif"
                className="object-cover rounded-lg"
              ></img>
              <div className="flex justify-between w-9/10 mx-auto">
                <div className="flex flex-row">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="fill-[#FFC960]" />
                  ))}
                </div>
                <span className="font-lato text-slate-600">
                  {pkg.nights}Nights - {pkg.days}Days
                </span>
              </div>
              <div className="border-slate-400 border-2 border-dashed w-9/10 mx-auto h-[1px]"></div>
              <div className="flex flex-col w-9/10 mx-auto gap-4">
                <span className="text-slate-400">{pkg.country}</span>

                <span className="text-[#113A75] text-[20px]">{pkg.tag}</span>
                <span className="text-slate-400 text-1xl">
                  Starting at ₹{pkg.price}/adult
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full">
      <div className="">
        <img
          src="/images/banner1.avif"
          alt="tour-package"
          className="w-full"
        ></img>
      </div>
      <div className="flex flex-col items-center  w-full px-2  gap-4 md:px-40 ">
        {categories.map((cat) => (
          <div className="w-full items-center flex flex-col gap-2 ">
            <span className="font-lato text-[#113A75] text-2xl font-semibold">
              {cat.id}
            </span>
            {displayPackages(cat.id)}
          </div>
        ))}
      </div>
    </div>
  );
}
