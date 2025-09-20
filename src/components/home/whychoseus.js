import { FaWindowRestore } from "react-icons/fa6";
export default function WhyChoseUs() {
  return (
    <div className="flex flex-col items-center gap-30 w-full">
      <div className="flex flex-col items-center gap-2">
        <span className="text-white text-5xl">
          Enjoy the Perfect Trip Created by Experts.
        </span>
        <span className="text-slate-500 ">
          Discover some of our Exclusive Tour Packges that highlight the unique
          aspects of each location.
        </span>
      </div>
      <img src="images/banner1.avif" className="w-full"></img>
      <div className="flex md:flex-row flex-col px-10 gap-4">
        <div className="flex flex-col bg-white rounded-lg">
          <div className="flex flex-col p-4 ">
            <span className="text-2xl text-[#113A75] font-lato">
              Customized Itineraries
            </span>
            <span className="text-1xl text-slate-500 font-lato">
              Whether you&apos;re seeking adventure, luxury, or relaxation, we design
              your trip to match your vibe.
            </span>
            <div className="h-30"></div>
            <FaWindowRestore className="text-4xl text-[#113A75]" />
          </div>
        </div>
        <div className="flex flex-col-reverse  bg-white rounded-lg p-4">
          <div className="flex flex-col ">
            <span className="text-2xl text-[#113A75] font-lato">
              Customized Itineraries
            </span>
            <span className="text-1xl text-slate-500 font-lato">
              Whether you&apos;re seeking adventure, luxury, or relaxation, we design
              your trip to match your vibe.
            </span>
          </div>
          <div className="h-30"></div>
          <FaWindowRestore className="text-4xl text-[#113A75]" />
        </div>
        <div className="flex flex-col bg-white rounded-lg">
          <div className="flex flex-col p-4 ">
            <span className="text-2xl text-[#113A75] font-lato">
              Customized Itineraries
            </span>
            <span className="text-1xl text-slate-500 font-lato">
              Whether you&apos;re seeking adventure, luxury, or relaxation, we design
              your trip to match your vibe.
            </span>
            <div className="h-30"></div>
            <FaWindowRestore className="text-4xl text-[#113A75]" />
          </div>
        </div>
        <div className="flex flex-col-reverse  bg-white rounded-lg p-4">
          <div className="flex flex-col ">
            <span className="text-2xl text-[#113A75] font-lato">
              Customized Itineraries
            </span>
            <span className="text-1xl text-slate-500 font-lato">
              Whether you&apos;re seeking adventure, luxury, or relaxation, we design
              your trip to match your vibe.
            </span>
          </div>
          <div className="h-30"></div>
          <FaWindowRestore className="text-4xl text-[#113A75]" />
        </div>
      </div>
    </div>
  );
}
