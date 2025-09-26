export default function Gallery() {
  const photos = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Beach
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80", // Mountains
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80", // Taj Mahal
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80", // Kerala backwaters
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80", // Jaipur palace
    "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80", // Goa beach
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80", // Desert safari
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80", // River rafting
    "https://images.unsplash.com/photo-1524492449090-1a5e04deef2c?auto=format&fit=crop&w=800&q=80", // Trekking
  ];

  return (
    <div className="flex flex-col bg-white px-2 pb-12 w-full">
      {/* Banner Section */}
      <div className="relative">
        <img
          src="/images/banner1.avif"
          alt="gallery-banner"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-b-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            TRAVEL GALLERY
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col items-center w-full px-4 md:px-20 lg:px-40 gap-12 mt-12">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">Memories from Our Journeys</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse of breathtaking destinations, happy travelers, and unforgettable 
            moments with <span className="font-semibold">Uttam Travells</span>.
          </p>
        </section>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {photos.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
