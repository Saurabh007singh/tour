import { packages } from "@/const/const"
import Link from "next/link";
import { FaStar } from "react-icons/fa";


export default function TourPage(){

  const international=packages.filter(item=>item.type === "international")
  const domestic=packages.filter(item=>item.type === "domestic")


  return ( <div className=" bg-white  flex flex-col w-full ">
      <div className="relative w-full">
        <img
          src="/images/banner1.avif"
          alt="tour-package"
          className=" z-10 object-cover"
        ></img>
        <div className="absolute inset-0 bg-black/50 z-20"></div>
       <div className="absolute inset-0 z-30 flex items-center justify-center">
          <span className="text-white font-bold font-lato  lg:text-6xl md:text-5xl sm:text-4xl text-3xl ">INTERNATIONAL TOURS</span>
        </div>
      </div>
      <div className="flex w-full flex-wrap py-10"><div className="flex flex-col items-center gap-4 w-full">
    <span className="text-[#113A75] text-5xl">International Tour & Travells Packges</span>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">

      {international.slice(0,3).map(pkg=>(<Link href={pkg.path} key={pkg.id}><div
                
                className="flex flex-col gap-6 border-slate-200 p-4 rounded-lg shadow-lg  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              >
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
              </div></Link>))}
      
       
       
      
    </div>
    
  </div></div><div className="flex w-full flex-wrap py-10"><div className="flex flex-col items-center gap-4 w-full">
    <span className="text-[#113A75] text-5xl">Domestic Tour & Travells Packges</span>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">

      {domestic.slice(0,4).map(pkg=>(<Link href={pkg.path} key={pkg.id}><div
                
                className="flex flex-col gap-6 border-slate-200 p-4 rounded-lg shadow-lg  cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              >
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
              </div></Link>))}
      
       
       
      
    </div>
    
  </div></div>
  
    </div>)
}