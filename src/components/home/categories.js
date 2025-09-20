import { categories } from "@/const/const";


export default function Categories(){
  return (<div className="flex flex-col gap-16 p-8 ">
    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
      <div className="flex flex-col gap-3 items-start">
        <h1 className="font-lato font-stretch-100% text-4xl md:text-5xl text-[#113A75] text-center">Explore Tour & Travel Categories</h1>
        <h2 className="text-slate-500 text-lato text-center">Discover a variety of travel experiences tailored to your interests, from serene beaches to thrilling adventures.</h2>
      </div>
      <button className="h-12 rounded-sm w-40 bg-[#113A75] font-lato text-white mt-auto hover:scale-90 transition text-[18px] hover:bg-[#113A75]-background duration-300">View All</button>
    </div>
    <div className="flex flex-wrap justify-center lg:justify-between gap-6">
  {categories.map((category) => (
    <div key={category.id} className="flex flex-col gap-2 items-center n w-full sm:w-auto">
      <img src={category.image} className="rounded-full h-55 w-55  object-cover" />
      <h1 className="font-lato text-slate-700 text-2xl  text-center">{category.id}</h1>
    </div>
  ))}
</div>
  </div>)
}