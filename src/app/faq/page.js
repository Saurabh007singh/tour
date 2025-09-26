"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Uttam Travells provide?",
      answer:
        "We offer customized travel packages, hotel bookings, flight reservations, car rentals, group tours, honeymoon packages, and corporate trips.",
    },
    {
      question: "Can I customize my tour package?",
      answer:
        "Yes, all our packages are customizable based on your preferences, budget, and travel style. Our team ensures a personalized experience.",
    },
    {
      question: "Do you provide 24/7 customer support?",
      answer:
        "Absolutely! Our dedicated team is available 24/7 to assist you throughout your journey, ensuring a hassle-free experience.",
    },
    {
      question: "How do I book a trip with Uttam Travells?",
      answer:
        "You can book directly through our website, call our travel experts, or visit our office. We guide you through every step of the booking process.",
    },
    {
      question: "Are your packages budget-friendly?",
      answer:
        "Yes, we design packages that suit every budget, from affordable trips to luxury experiences, without compromising on comfort and quality.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-white px-2 pb-12 w-full">
      {/* Banner Section */}
      <div className="relative">
        <img
          src="/images/banner1.avif"
          alt="faq-banner"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-b-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center w-full px-4 md:px-20 lg:px-40 gap-8 mt-12">
        <h2 className="text-3xl font-bold text-blue-600 text-center">
          Your Questions, Answered
        </h2>
        <p className="text-gray-600 text-center max-w-2xl">
          We’ve compiled answers to the most common questions our travelers ask.
          If you still have doubts, feel free to reach out to our support team.
        </p>

        <div className="w-full max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-800 font-semibold focus:outline-none"
              >
                {faq.question}
                <span className="text-blue-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
