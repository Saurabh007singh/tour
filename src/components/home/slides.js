"use client"

import {useEffect,useState} from "react";

const banners=[
  {id:1,image:'/images/B1.avif'},
  {id:2,image:'/images/B2.avif'},
  {id:3,image:'/images/B3.avif'}
]

export default function BannerCrousel(){
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentIndex(prevIndex=>prevIndex===banners.length-1 ? 0 :prevIndex+1);
    },5000)

    return ()=>clearInterval(interval)
  },[])

  return(<section className="relative w-full h-[90vh] overflow-hidden">
      {/* Image slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out  ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={banner.image}
            alt={`Banner ${banner.id}`}
            className=" object-fit  animate-zoomOut w-full h-full"
          />
           <div className="absolute inset-0 bg-black/40" />
        </div>

        
      ))}

      {/* Overlay text (centered) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
          Welcome to Our World
        </h1>
      </div>

      {/* Bottom left button */}
      <div className="absolute bottom-6 left-6 flex flex-col md:flex-row gap-2 items-center ">
        <button className="bg-white text-[#113A75] hover:scale-90 hover:bg-[#113A75]-background px-6 py-3 rounded font-lato shadow  transition">
          Book A Trip
        </button>
        <p className="font-lato text-1xl w-1/2">With years of expertise and a network of trusted partners, Let Travel offers exclusive access to hidden gems and iconic destinations alike.</p>

      </div>

      {/* Bottom right social icons */}
      <div className="absolute bottom-6 right-6 flex space-x-4">
        <a href="#" className="text-white hover:text-blue-400">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-white hover:text-pink-500">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="text-white hover:text-blue-600">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
      </div>
    </section>);
}