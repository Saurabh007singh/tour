"use client";
import { useEffect, useState } from "react";

export default function PriceCard({ pkg }) {
  const [fixed, setFixed] = useState(false);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const card = document.getElementById("price-card");
      if (!card) return;

      const rect = card.getBoundingClientRect();
      if (rect.top <= 20 && !fixed) {
        setWidth(card.offsetWidth);
        setHeight(card.offsetHeight);
        setFixed(true);
      } else if (rect.top > 20 && fixed) {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [fixed]);

  return (
    <div style={{ position: "relative" }}>
      {/* 👇 spacer keeps layout stable when fixed */}
      {fixed && <div style={{ height }} />}

      <div
        id="price-card"
        className={`${
          fixed ? "fixed top-20 right-20 z-50" : "relative"
        } bg-white shadow-lg border border-slate-200 flex flex-col items-start p-6`}
        style={fixed ? { width } : {}}
      >
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <span
              className={`${
                pkg.deluxPrice > pkg.deluxSalePrice ? "line-through" : ""
              } text-gray-600 text-xs md:text-sm`}
            >
              ₹{pkg.deluxPrice}
            </span>
            <span className="text-red-500 text-xs md:text-sm">
              (
              {Math.round(
                ((pkg.deluxPrice - pkg.deluxSalePrice) / pkg.deluxPrice) * 100
              )}
              % Off)
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-[30px] text-[#4A4A4A] font-semibold font-lato">
              ₹{pkg.deluxSalePrice}
            </span>
            <span className="text-[18px] mt-2 text-[#4A4A4A]">/Adult</span>
          </div>
          <span className="text-[12px] text-[#4A4A4A]">
            *Excluding Applicable Taxes
          </span>
          <button className="p-2 bg-gradient-to-l from-blue-700 to-blue-400 mx-auto rounded-sm mt-2 w-full font-semibold font-lato">
            Get Started
          </button>
          <span className="text-[15px] mt-3 text-[#4A4A4A]">
            *Click Here to know more about our luxury prices
          </span>
        </div>
      </div>
    </div>
  );
}
