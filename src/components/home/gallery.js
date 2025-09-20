'use client'; // Only needed if using App Router


import Link from 'next/link';

const galleryImages = [
  { src: '/images/trip3.avif', alt: 'Cultural Performance' },
  { src: '/images/trip3.avif', alt: 'Colorful Costume Dance' },
  { src: '/images/trip3.avif', alt: 'Tourist Woman Exploring City' },
  { src: '/images/trip3.avif', alt: 'Tourist in Red Dress' },
  { src: '/images/trip3.avif', alt: 'Bali Temple Entrance' },
];

export default function GallerySection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">
        See The World Like Never Before
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover some of our gallery photos that highlight the unique aspects of each location.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {/* First Image (Large - 2x1) */}
        <div className="sm:col-span-2 row-span-2 relative h-96">
          <img
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            
            className="object-cover rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div className="relative h-96">
          <img
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
          
            className="object-cover rounded-lg"
          />
        </div>

        {/* Third Image */}
        <div className="relative h-60">
          <img
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Fourth Image */}
        <div className="relative h-60">
          <img
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Fifth Image */}
        <div className="relative h-60">
          <img
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/gallery">
        <button className="bg-blue-700 mt-40 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
          View All Gallery
        </button>
      </Link>
    </section>
  );
}
