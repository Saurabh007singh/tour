import Link from "next/link";
import { FaStar } from "react-icons/fa";


export default function Tour(){
  return (<div className="flex flex-col items-center gap-4 w-full">
    <span className="text-[#113A75] text-5xl">Exclusive Tour & Travells Packges</span>
    <span className="text-slate-500 ">Discover some of our Exclusive Tour Packges that highlight the unique aspects of each location</span>
    <div className="flex flex-col md:flex-row gap-4 ">
      <div className="flex flex-col gap-6 border-slate-200 border-1 p-4 rounded-lg shadow-lg ">
        <img src="images/tour1.avif" className="object-cover rounded-lg"></img>
        <div className="flex justify-between w-9/10 mx-auto">
          <div className="flex flex-row">{Array.from({length:5}).map((_,index)=>(
          <FaStar key={index} className="fill-[#FFC960]"/>
        ))}</div>
        <span className="font-lato text-slate-600">4Nights - 5Days</span>
        </div>
       <div className="border-slate-400 border-2 border-dashed w-9/10 mx-auto h-[1px]"></div>
        <div className="flex flex-col w-9/10 mx-auto gap-4">
        <span className="text-slate-400">Thailand</span>
        
        <span className="text-[#113A75] text-2xl ">Phuket Karbi Gateway</span>
        <span className="text-slate-400 text-1xl">Starting at $999/adult</span>
        </div>
      </div>
       <div className="flex flex-col gap-6 border-slate-200 border-1 p-4 rounded-lg shadow-lg ">
        <img src="images/tour1.avif" className="object-cover rounded-lg"></img>
        <div className="flex justify-between w-9/10 mx-auto">
          <div className="flex flex-row">{Array.from({length:5}).map((_,index)=>(
          <FaStar key={index} className="fill-[#FFC960]"/>
        ))}</div>
        <span className="font-lato text-slate-600">4Nights - 5Days</span>
        </div>
       <div className="border-slate-400 border-2 border-dashed w-9/10 mx-auto h-[1px]"></div>
        <div className="flex flex-col w-9/10 mx-auto gap-4">
        <span className="text-slate-400">United Arab Emirates
</span>
        
        <span className="text-[#113A75] text-2xl ">Dubai City Tour</span>
        <span className="text-slate-400 text-1xl">Starting at $999/adult</span>
        </div>
      </div>
       <div className="flex flex-col gap-6 border-slate-200 border-1 p-4 rounded-lg shadow-lg ">
        <img src="images/tour1.avif" className="object-cover rounded-lg"></img>
        <div className="flex justify-between w-9/10 mx-auto">
          <div className="flex flex-row">{Array.from({length:5}).map((_,index)=>(
          <FaStar key={index} className="fill-[#FFC960]"/>
        ))}</div>
        <span className="font-lato text-slate-600">4Nights - 5Days</span>
        </div>
       <div className="border-slate-400 border-2 border-dashed w-9/10 mx-auto h-[1px]"></div>
        <div className="flex flex-col w-9/10 mx-auto gap-4">
        <span className="text-slate-400">Azerbaijan</span>
        
        <span className="text-[#113A75] text-2xl ">Baku Adventure</span>
        <span className="text-slate-400 text-1xl">Starting at $999/adult</span>
        </div>
      </div>
      
    </div>
    <Link
  href="/packages"
  className="h-12 mt-10 w-40 rounded-sm bg-[#113A75] font-lato text-white hover:scale-95 transition text-[18px] hover:bg-[#113A75]-background duration-300 flex items-center justify-center "
>
  Discover More
</Link>
  </div>)
}