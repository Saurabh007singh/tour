export default function Trips(){
  return (<div className="flex md:flex-row flex-col ">

    <div className="flex flex-col gap-4 md:w-1/2 p-4 md:p-8 justify-between">
    <h1 className="font-lato text-3xl md:text-4xl lg:text-5xl text-[#113A75] text-center md:text-left">Creating Joyful Journeys For Every Generation</h1>
    <img src="/images/trip1.avif" alt="trip1" className="rounded-lg" />
    </div>
    <div className="flex flex-col gap-4 md:w-1/2 p-4 md:p-8 justify-between items-center md:items-start">
      <p className="text-robot text-slate-500 text-center md:text-left ">Step into a world of unforgettable adventures with Travlo. Whether you’re seeking serene beaches, vibrant cities, or hidden gems, we make every journey seamless and extraordinary. Your dream destination is just a click away! Contact Us</p>
      <button className="h-12 w-40 rounded-sm  bg-[#113A75] font-lato text-white hover:scale-95 transition text-[18px] hover:bg-[#113A75]-background duration-300">Discover More</button>
      <div className="flex md:flex-row flex-col gap-6 items-center ">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row gap-1"><span className="text-4xl text-[#113A75]">7</span><span className="text-4xl text-[#FFC960]">+</span></div>     
          <span className="font-lato text-slate-500">Years of experience</span>
        </div>
        <div className="flex flex-col items-center  md:items-start">
          <div className="flex flex-row gap-1"><span className="text-4xl text-[#113A75]">50</span><span className="text-4xl text-[#FFC960]">+</span></div>     
          <span className="font-lato text-slate-500">Trip Destination</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-row gap-1"><span className="text-4xl text-[#113A75]">5K</span><span className="text-4xl text-[#FFC960]">+</span></div>     
          <span className="font-lato text-slate-500">Happy Travellers</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div><img src="/images/trip2.avif"  alt="trip2" className="rounded-lg " /></div>
        <div><img src="/images/trip3.avif"  alt="trip3"  className="rounded-lg "  /></div>
        
      </div>
    </div>
    
  </div>)
}