import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C3C82] text-white px-6 lg:px-20 pt-12 pb-6">
      {/* Newsletter Signup */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-b border-white/20 pb-10">
        <h2 className="text-3xl font-semibold text-center lg:text-left">
          Get Updated The Latest Newsletter
        </h2>
        <div className="flex bg-white rounded-lg overflow-hidden max-w-md w-full">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 text-slate-700 outline-none"
          />
          <button className=" text-primary px-5 font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm mt-10">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <div className="text-white text-xl font-semibold flex items-center gap-2">
            <img src="/images/logo.avif" alt="Logo" className="h-30" />
         
          </div>
          <p className="text-white/80 leading-relaxed">
            A multinational Travel Management Company with a 25-year long global
            presence and expertise
          </p>
          <div className="flex gap-3 mt-2 text-white/80">
            <FaFacebookF className="hover:text-white cursor-pointer " />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTelegramPlane className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <div>
            <p className="text-white/60">Our Address</p>
            <p>Jalan By Pass Ngurah Rai –<br />Denpasar, Bali. Indonesia</p>
          </div>
          <div>
            <p className="text-white/60">Our Phone</p>
            <p>(555) 987-6543</p>
          </div>
          <div>
            <p className="text-white/60">Our Email</p>
            <p>Support@Epicescapes.Com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Destinations</li>
            <li>Tour Package</li>
            <li>FAQs</li>
            <li>Tour Guide</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Working Hours</h3>
          <div className="flex justify-between border-b border-white/20 pb-1">
            <span>Mon – Tue</span>
            <span>8.00 AM-9.00 PM</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-1">
            <span>Wed – Thu</span>
            <span>8.00 AM-9.00 PM</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-1">
            <span>Fri – Sat</span>
            <span>8.00 AM-9.00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-white/70 text-sm mt-10 border-t border-white/20 pt-6">
        Copyright © 2025 EpicEscapes. All Rights Reserved.
      </div>
    </footer>
  );
}
