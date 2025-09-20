"use client"
import { useState } from "react";
import { FaArrowRight, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const faqs = [
  { id: 1, question: "What Services Do You Offer?", answer: "We offer personalized tour packages, flight booking, accommodation, and guided tours." },
  { id: 2, question: "Can I Customize My Travel Itinerary?", answer: "Absolutely! Our team will work with you to build your dream itinerary." },
  { id: 3, question: "Do You Offer Group Discounts?", answer: "Yes, we provide special rates for group bookings and corporate trips." },
  { id: 4, question: "Is Travel Insurance Included?", answer: "Travel insurance is not included by default but can be added upon request." },
  { id: 5, question: "How Do I Book A Trip With Your Agency?", answer: "You can book through our website or contact our agents for assistance." },
  { id: 6, question: "What Payment Methods Do You Accept?", answer: "We accept all major credit cards, PayPal, and direct bank transfers." }
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="bg-blue-50 px-6 py-12 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-10 w-full">
      {/* FAQ List */}
      <div className="flex-1 max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-800 mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-600 mb-8">
          Provides important details and answers to frequently asked questions by travelers.
        </p>

        <div className="flex flex-col divide-y divide-slate-300">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-4 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
              <div className="flex justify-between items-center text-slate-800 font-medium">
                <span>{faq.id}. {faq.question}</span>
                <FaArrowRight className={`transition-transform duration-300 ${activeId === faq.id ? 'rotate-90' : ''}`} />
              </div>
              {activeId === faq.id && (
                <p className="mt-2 text-slate-600 text-sm transition-all duration-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image + Contact Card */}
      <div className="relative w-full lg:w-[400px]">
        <img
          src="images/pool.jpg" // Replace with your image path
          alt="Couple at pool"
          className="rounded-lg object-cover w-full h-[400px]"
        />
        <div className="absolute bottom-4 left-4 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-slate-800">Contact Us</h3>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <FaPhoneAlt /> <span>(555) 987-6543</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <FaEnvelope /> <span>support@epicescapes.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}