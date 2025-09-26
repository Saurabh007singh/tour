export default function Blogs() {
  const blogs = [
    {
      title: "Top 10 Hill Stations to Visit in India",
      date: "September 15, 2025",
      image: "/images/blog1.avif",
      excerpt:
        "From Shimla to Ooty, explore the best hill stations that offer breathtaking views, cool weather, and unforgettable experiences.",
    },
    {
      title: "A Complete Guide to Goa Beaches",
      date: "August 28, 2025",
      image: "/images/blog2.avif",
      excerpt:
        "Discover the charm of Goa – golden sands, beach shacks, nightlife, and water sports that make it India’s favorite holiday spot.",
    },
    {
      title: "Wildlife Adventures in India",
      date: "August 10, 2025",
      image: "/images/blog3.avif",
      excerpt:
        "India is home to majestic tigers, elephants, and diverse wildlife. Here’s your guide to the best safari destinations.",
    },
    {
      title: "Best Honeymoon Destinations in India",
      date: "July 20, 2025",
      image: "/images/blog4.avif",
      excerpt:
        "From the backwaters of Kerala to snowy Kashmir, here are romantic getaways that will make your honeymoon special.",
    },
  ];

  return (
    <div className="flex flex-col bg-white px-2 pb-12 w-full">
      {/* Banner Section */}
      <div className="relative">
        <img
          src="/images/banner1.avif"
          alt="blogs-banner"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-b-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            TRAVEL BLOGS
          </h1>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="flex flex-col items-center w-full px-4 md:px-20 lg:px-40 gap-12 mt-12">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-blue-600">Latest Travel Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay inspired with travel tips, destination guides, and stories from{" "}
            <span className="font-semibold">Uttam Travells</span>.
          </p>
        </section>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h3 className="text-lg font-bold text-blue-600 mt-1">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {blog.excerpt}
                </p>
                <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
