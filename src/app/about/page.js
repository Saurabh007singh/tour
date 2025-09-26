export default function About() {
  return (
    <div className="flex flex-col bg-white px-2 pb-12 w-full">
      {/* Banner Section */}
      <div className="relative">
        <img
          src="/images/banner1.avif"
          alt="tour-package"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-b-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center w-full px-4 md:px-20 lg:px-40 gap-12 mt-12">
        
        {/* Company Intro */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">Uttam Travells</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold">Uttam Travells</span>, we believe that travel is not 
            just about reaching a destination, but about creating memories that last a lifetime.  
            With years of expertise in providing top-notch travel services, we curate personalized 
            experiences across India and beyond. Whether it’s a family holiday, adventure trip, 
            honeymoon, or corporate tour, we make your journey smooth, safe, and unforgettable.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/travel1.avif"
            alt="mission"
            className="rounded-2xl shadow-lg"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to inspire and enable people to explore the beauty of the world.  
              We strive to provide travel solutions that combine comfort, affordability, 
              and unique experiences — making every journey with us a story worth telling.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full">
          <h3 className="text-2xl font-bold text-blue-600 text-center mb-6">
            Why Choose Uttam Travells?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
              <img src="/images/service1.avif" alt="service" className="rounded-lg mb-4" />
              <h4 className="font-semibold text-lg text-blue-600">Tailored Packages</h4>
              <p className="text-gray-600">Custom-made trips designed to match your preferences, budget, and style.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
              <img src="/images/service2.avif" alt="support" className="rounded-lg mb-4" />
              <h4 className="font-semibold text-lg text-blue-600">24/7 Support</h4>
              <p className="text-gray-600">Dedicated customer support to make your travel hassle-free and smooth.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
              <img src="/images/service3.avif" alt="trust" className="rounded-lg mb-4" />
              <h4 className="font-semibold text-lg text-blue-600">Trusted Experience</h4>
              <p className="text-gray-600">Thousands of happy travelers who trust us for safe and joyful journeys.</p>
            </div>
          </div>
        </section>

        {/* Team/Closing Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">Meet Our Team</h3>
            <p className="text-gray-700 leading-relaxed">
              Our passionate travel experts and guides work tirelessly to make sure your trip is 
              nothing short of amazing. From planning to execution, we’re with you at every step 
              of the way, ensuring a seamless travel experience.
            </p>
          </div>
          <img
            src="/images/team.avif"
            alt="team"
            className="rounded-2xl shadow-lg"
          />
        </section>
      </div>
    </div>
  );
}
