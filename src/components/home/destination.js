import { FaLocationArrow } from "react-icons/fa";
  const destinations = [
  {
    id: "phuket",
    dest: "Thailand",
    img: "images/phuket.avif",
    path: "/destinations/phuket",
  },
  {
    id: "bali",
    dest: "Indonesia",
    img: "images/bali.avif",
    path: "/destinations/bali",
  },
  {
    id: "paris",
    dest: "France",
    img: "images/paris.avif",
    path: "/destinations/paris",
  },
  {
    id: "rome",
    dest: "Italy",
    img: "images/rome.avif",
    path: "/destinations/rome",
  },
  {
    id: "tokyo",
    dest: "Japan",
    img: "images/tokyo.avif",
    path: "/destinations/tokyo",
  },
  {
    id: "cape_town",
    dest: "South Africa",
    img: "images/cape_town.avif",
    path: "/destinations/cape-town",
  }
];


export default function Destination(){

  return(<div className="flex flex-col w-full gap-4">
    <div className="flex md:flex-row flex-col justify-between  gap-4">
      <div className="flex flex-col gap-4">
        <span className="text-5xl text-[#113A75] font-lato">Explore Our Top Destinations</span>
        <span className="text-slate-500">Are You tired of the typical destinations and looking to step out of your comfort zone travel</span>
      </div>
      <button className="h-12 px-2 rounded-sm  mt-auto bg-[#113A75] font-lato text-white hover:scale-95 transition text-[18px] hover:bg-[#113A75]-background duration-300">View More Destinations</button>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 ">{destinations.map((items)=>{return <div key={items.id} className="relative">
      <img src={items.img} alt={items.id} className="rounded-lg w-full h-auto"></img>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/10 backdrop-blur-xs h-10 flex items-center justify-between rounded-b-lg z-10">
          <span className="text-sm font-medium ">{items.id}, {items.dest}</span>
          <FaLocationArrow className="text-[#113A75]" />
        </div>
    </div> })}</div>
  </div>)
}