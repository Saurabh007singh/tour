import { FaPhone } from "react-icons/fa";

export default function HeroCTA() {
  return (
    <div className="relative w-full h-[500px]  flex items-center justify-center text-white">
     
  
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Content */}
      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Adventure Awaits – Book Your Journey Today
        </h1>
        <p className="text-lg text-white/90 mb-6">
          Step into a world of unforgettable adventures with EpicEscapes.
          <br className="hidden md:block" />
          We make every journey seamless and extraordinary.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
            Book A Trip
          </button>
          <button className="flex items-center gap-2 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-yellow-300 transition">
            <FaPhone />
            <span>
              To More Inquiry<br />
              P : (555) 987-6543
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
