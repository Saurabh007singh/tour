"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [atTop, setAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setAtTop(window.scrollY <= 0);
    };

    handleScroll(); // Initialize atTop on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid using scroll-dependent styles during SSR
  const headerClass = mounted && !atTop
    ? "bg-white backdrop-blur-md shadow-lg"
    : "bg-transparent shadow-none";

  const textColor = mounted && !atTop ? "text-black" : "text-white";

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-80 transition-all duration-300 ${headerClass}`}
      >
        <div className="max-w-8xl mx-auto h-20 px-4 py-3 flex items-center justify-between">
          {/* Mobile: Menu button */}
          <button
            className={`  ${textColor} md:hidden text-2xl`}
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>

          {/* Desktop: Logo */}
          <div className="hidden md:block "><div className="flex flex-row  items-center ">
            <img src="/images/logo2.avif" width={160}   />
            <img src="/images/logo1.avif"  width={70}  />
          </div></div>
          

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 relative items-center font-lato">
            <Link href="/" className={textColor}>Home</Link>
            <Link href="/about" className={textColor}>About</Link>
            <Link href="/destinations" className={textColor}>Destinations</Link>

            {/* Packages Dropdown */}
            <div className="relative group inline-block">
              <button className={textColor}><Link href="/packages">Packages</Link></button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded z-10">
                <Link href="/packages/tour" className="block px-4 py-2 text-black hover:bg-gray-100">International</Link>
                <Link href="/packages/details" className="block px-4 py-2 text-black hover:bg-gray-100">Domestic</Link>
              </div>
            </div>

            {/* Pages Dropdown */}
            <div className="relative group inline-block">
              <button className={textColor}>Pages</button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded z-10">
                <Link href="/tourguide" className="block px-4 py-2 text-black hover:bg-gray-100">Tour Guide</Link>
                <Link href="/faq" className="block px-4 py-2  text-black hover:bg-gray-100">FAQs</Link>
                <Link href="/gallery" className="block px-4 py-2  text-black hover:bg-gray-100">Gallery</Link>
              </div>
            </div>

            <Link href="/blogs" className={textColor}>Blog</Link>
            <Link href="/contact" className={textColor}>Contact</Link>
          </nav>

          {/* Get Started button */}
          <button className="h-15 rounded-sm w-40 text-white bg-[#113A75] font-lato hover:scale-90 transition text-[18px] hover:bg-primary-background duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        {/* Solid white menu panel */}
        <div
          className={`absolute top-0 left-0 w-64 h-full bg-white p-6 flex flex-col space-y-4 transform transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-row">
              <img src="/images/logo2.avif" width={130} />
              <img src="/images/logo1.avif" width={50} />
            </div>

            <button
              className="text-2xl text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              <FiX />
            </button>
          </div>

          <Link href="/" onClick={() => setMobileOpen(false)} className="text-black">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-black">About</Link>
          <Link href="/packages" onClick={() => setMobileOpen(false)} className="text-black">Destinations</Link>
          <Link href="/packages/tour" onClick={() => setMobileOpen(false)} className="text-black">International</Link>
          <Link href="/packages/details" onClick={() => setMobileOpen(false)} className="text-black">Domestic</Link>
          <Link href="/pages/tour-guide" onClick={() => setMobileOpen(false)} className="text-black">Tour Guide</Link>
          <Link href="/pages/faqs" onClick={() => setMobileOpen(false)} className="text-black">FAQs</Link>
          <Link href="/pages/gallery" onClick={() => setMobileOpen(false)} className="text-black">Gallery</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="text-black">Blog</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-black">Contact</Link>
        </div>
      </div>
    </>
  );
}
