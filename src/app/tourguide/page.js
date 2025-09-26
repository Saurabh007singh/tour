export default function TourGuides() {
  const guides = [
    {
      name: "Ravi Sharma",
      role: "Senior Tour Guide",
      image: "/images/guide1.avif",
      desc: "Specializes in cultural and heritage tours across India with 10+ years of experience.",
    },
    {
      name: "Priya Mehta",
      role: "Adventure Expert",
      image: "/images/guide2.avif",
      desc: "Loves trekking, camping, and leading adventure trips in the Himalayas.",
    },
    {
      name: "Arjun Singh",
      role: "Wildlife Specialist",
      image: "/images/guide3.avif",
      desc: "Expert in wildlife safaris and eco-tourism, passionate about nature conservation.",
    },
    {
      name: "Neha Kapoor",
      role: "Luxury Travel Consultant",
      image: "/images/guide4.avif",
      desc: "Helps curate luxury holidays with attention to comfort and premium experiences.",
    },
  ];

  return (
    <div className="flex flex-col bg-white px-2 pb-12 w-full">
      {/* Banner Section */}
      <div className="relative">
        <img
          src="/images/banner1.avif"
          alt="tour-guides-banner"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-b-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            OUR TOUR GUIDES
          </h1>
        </div>
      </div>

      {/* Guides Section */}
      <div className="flex flex-col items-center w-full px-4 md:px-20 lg:px-40 gap-12 mt-12">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">Meet Our Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our professional and friendly tour guides make every journey with 
            <span className="font-semibold"> Uttam Travells </span>
            unforgettable. From local insights to world-class service, they’re here to 
            ensure your trip is safe, fun, and memorable.
          </p>
        </section>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={guide.image}
                alt={guide.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-blue-600">{guide.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{guide.role}</p>
                <p className="text-gray-600 text-sm">{guide.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
