import { specificPackage } from "@/const/const";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import Itinerary from "@/components/specifictour/itenary";

export async function generateStaticParams() {
  const ids = [
    "himachal"    
  ]; // Add your actual IDs here
  return ids.map((id) => ({ id }));
}
export default async function SpecificDomesticPage({ params }) {
  const { id } = await params;

  const pkg = specificPackage.filter(
    (p) => p.state === id.charAt(0).toUpperCase() + id.slice(1)
  );

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="relative w-full">
        <img
          src={pkg[0].bannerImg}
          alt="tour-package"
          className="z-10 w-full h-[400px] object-cover"
        ></img>
        <div className="absolute inset-0 h-[400px] bg-black/20 z-20"></div>
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <span className="text-white  lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold font-lato ">
            {pkg[0].tag}
          </span>
        </div>
      </div>
      <div className="sticky top-20 bg-white z-40 md:px-40  px-4 py-2 shadow-sm">
        <span className="text-[20px] font-lato text-black font-semibold">
          {pkg[0].tag}
        </span>
        <div className="flex flex-row gap-4 items-center mt-2">
          <span className="border p-1 rounded-sm font-lato text-[14px] text-[#646464] font-semibold">
            {pkg[0].days}D/{pkg[0].nights}N
          </span>
          <span className="text-[#646464] text-[16px] font-semibold">
            {pkg[0].dest1Timing}N {pkg[0].dest1} — {pkg[0].dest2Timing}N{" "}
            {pkg[0].dest2}
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse bg-gray-200 md:px-30 md:flex-row   w-full gap-2">
        <div className="flex flex-col gap-2 md:w-[75%]">
          <div className="flex flex-col md:flex-row w-full p-2 gap-2">
            <div className="md:w-[50%] rounded-lg overflow-hidden bg-red-200 relative flex">
              <img
                src={pkg[0].galleryImg}
                className="object-cover w-full"
                alt={pkg[0].name}
              ></img>
            </div>
            <div className="md:w-[25%] flex flex-col gap-4 rounded-sm bg-white p-3">
              <span className="bg-gradient-to-r p-1 from-red-500 to-orange-500 rounded-lg text-center text-white font-lato">
                PACKAGE HIGHLIGHTS
              </span>
              <div className="flex flex-row  gap-2 text-black">
                <BsArrowRightCircle className="text-slate-600" />
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold">
                    {pkg[0].highlight1[0]}
                  </span>
                  <span className="text-[12px] font-semibold text-slate-600">
                    Day{pkg[0].highlight1[2]}-{pkg[0].highlight1[1]}
                  </span>
                </div>
              </div>
              <div className="flex flex-row  gap-2 text-black">
                <BsArrowRightCircle className="text-slate-600" />
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold">
                    {pkg[0].highlight2[0]}
                  </span>
                  <span className="text-[12px] font-semibold text-slate-600">
                    Day{pkg[0].highlight2[2]}-{pkg[0].highlight2[1]}
                  </span>
                </div>
              </div>
              <img src={pkg[0].highlightImg} className="rounded-sm"></img>
            </div>
            <div className=" md:w-[25%] rounded-sm bg-red-400"></div>
          </div>
          <div className="flex md:p-4  flex-col items-center">
            <Itinerary pkg={pkg}></Itinerary>
          </div>
        </div>
        <div className="md:w-[25%] w-full flex flex-col mx-auto">
          <div className="flex md:ml-2 mt-2 md:sticky md:self-start bg-white  md:top-20 md:z-40 flex-col rounded-sm shadow-lg gap-1 border border-slate-200 p-4 ">
            <div className="flex gap-1">
              <span
                className={`${
                  pkg[0].deluxPrice > pkg[0].deluxSalePrice
                    ? "line-through"
                    : null
                } text-gray-600 text-xs md:text-sm`}
              >
                ₹{pkg[0].deluxPrice}
              </span>
              <span className="text-red-500 text-xs md:text-sm">
                (
                {Math.round(
                  ((pkg[0].deluxPrice - pkg[0].deluxSalePrice) /
                    pkg[0].deluxPrice) *
                    100
                )}
                % Off)
              </span>
            </div>
            <div className="flex flex-row items-center">
              <span className="text-[30px] text-[#4A4A4A] font-semibold font-lato ">
                {" "}
                ₹{pkg[0].deluxSalePrice}
              </span>
              <span className="text-[18px] mt-2 text-[#4A4A4A]">/Adult</span>
            </div>
            <span className="text-[12px] text-[#4A4A4A]">
              *Excluding Applicable Taxes
            </span>
            <button className="p-2 text-white bg-gradient-to-l from-blue-700 to-blue-400 mx-auto rounded-sm mt-2 w-full font-semibold font-lato">
              Get Started
            </button>
            <span className="text-[15px] mt-3 text-[#4A4A4A]">
              *Click Here to know more about oyr luxry prices
            </span>
          </div>
          <div className="hidden md:block w-full">
            <div className="mt-42 grid grid-cols-2  gap-2 w-full ">
              <img
                src="/images/shimla-manali-day1.avif"
                alt="Trip"
                className="w-full  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day2.avif"
                alt="Trip"
                className="w-full  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day4.avif"
                alt="Trip"
                className="col-span-2  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day5.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day6.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day3.avif"
                alt="Trip"
                className="w-full col-span-2  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day5.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day6.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day4.avif"
                alt="Trip"
                className="col-span-2  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day5.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day6.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day1.avif"
                alt="Trip"
                className="w-full  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day2.avif"
                alt="Trip"
                className="w-full  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day4.avif"
                alt="Trip"
                className="col-span-2  object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day5.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day6.avif"
                alt="Trip"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="/images/shimla-manali-day3.avif"
                alt="Trip"
                className="w-full col-span-2  object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
