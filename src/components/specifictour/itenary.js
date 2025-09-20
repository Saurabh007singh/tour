"use client";
import { useEffect, useRef, useState } from "react";
import { FaHotel } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";

export default function Itinerary({ pkg }) {
  const [activeDay, setActiveDay] = useState(0);
  const dayRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDay(parseInt(entry.target.dataset.index));
          }
        });
      },
      {
        threshold: 0.3, // triggers earlier
        rootMargin: "-20% 0px -50% 0px", // improves accuracy
      }
    );

    dayRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      dayRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const handleDayClick = (index) => {
    dayRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex w-full md:p-4 flex-col md:flex-row gap-2">
      <div
        className="
    mt-10 
    w-full md:w-[15%]  
    self-start sticky top-40 z-10
    bg-white p-2 
    flex gap-2 
    overflow-x-auto md:overflow-visible 
    flex-nowrap md:flex-wrap 
    scrollbar-hide
  "
      >
        <span className="flex-shrink-0 p-2 border text-[14px] rounded-sm border-gray-600 bg-white text-gray-600 font-semibold font-lato">
          {pkg[0].days} DAY PLAN
        </span>

        {pkg[0].itinerary.map((day, idx) => (
          <button
            key={idx}
            onClick={() => handleDayClick(idx)}
            className={`flex-shrink-0 px-4 py-2 text-[12px] border text-sm font-semibold whitespace-nowrap transition-all
        ${
          activeDay === idx
            ? "bg-gray-600 text-white border-gray-600"
            : "bg-white text-gray-600 border-gray-300"
        }`}
          >
            Day {day.day}
          </button>
        ))}
      </div>

      <div className="mt-10 w-full flex flex-col gap-6  ">
        {pkg[0].itinerary.map((day, idx) => (
          <div
            key={idx}
            ref={(el) => (dayRefs.current[idx] = el)}
            data-index={idx}
            className="bg-white border border-gray-200 p-4 w-full scroll-mt-40 relative"
          >
            <div className="flex flex-row w-full gap-2 md:gap-4 items-center">
              <span className="md:text-md text-[14px]  w-16 md:w-18 p-2 text-center font-lato font-bold text-white bg-gradient-to-r from-red-500 to-orange-500">
                Day {day.day}
              </span>
              <span className="text-sm md:text-md text-[#4A4A4A] font-semibold">
                {day.place}
              </span>
              <span className="flex flex-row items-center gap-2 text-sm text-[#4A4A4A]">
                INCLUDED: <FaHotel />
                Hotel <IoCarSport />
                Transfer
              </span>
            </div>

            <div className="mt-2 flex flex-row gap-2 items-center p-2">
              <GiMeal className="text-4xl text-gray-600" />
              <p className="text-gray-600 italic font-semibold font-lato text-md">
                {day.meal}
              </p>
            </div>

            <p className="mt-2 ml-3 text-[#4A4A4A]">{day.description}</p>

            {day.mainAttractions.length > 0 && (
              <ul className="list-disc list-inside mt-3 ml-4 text-gray-700 text-sm">
                {day.mainAttractions.map((place, index) => (
                  <li key={index}>{place}</li>
                ))}
              </ul>
            )}
            {/* <img
              className="md:absolute md:w-60  lg:w-80 rounded-lg md:top-1/2  md:-translate-y-1/2   h-60 lg:right-[-370] md:right-[-300]"
              src={day.image}
            ></img> */}
          </div>
        ))}
      </div>
    </div>
  );
}
