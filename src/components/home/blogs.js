"use client"

import Link from 'next/link';

const blogs = [
  {
    title: "Travel Is More Than Just Moving From One Place To Another",
    date: "2025-05-21",
    image: "/images/blog1.avif",
    link: "/blog/travel-is-more-than-moving"
  },
  {
    title: "A Memorable Trip Isn’t Just About The Destination",
    date: "2025-05-21",
    image: "/images/blog1.avif",
    link: "/blog/memorable-trip"
  },
  {
    title: "Exploring The Hidden Gems Of Bali Beyond The Trails",
    date: "2025-04-22",
    image: "/images/blog1.avif",
    link: "/blog/hidden-gems-bali"
  },
  {
    title: "The Ultimate Guide To Stress-Free International Travel",
    date: "2025-04-22",
    image: "/images/blog1.avif",
    link: "/blog/stress-free-travel"
  }
];

export default function BlogSection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-2">Read Our Latest Blog</h2>
      <p className="text-gray-600 mb-8">
        Following are detailed blogs and articles on our Tour and travel topics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, idx) => (
          <div key={idx} className="relative border rounded-lg shadow-sm overflow-hidden">
            <div className=" h-auto w-full">
              <img
                src={blog.image}
                alt={blog.title}
                
                
              />
            </div>
            <div className="p-4 absolute  bottom-0 z-60">
              <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
              <p className="text-sm text-white mt-2">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <Link href={blog.link}>
                <button className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-blue-800 transition">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}