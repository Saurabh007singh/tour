const customers = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Traveller",
    review: "This was the most unforgettable trip of my life! Everything was perfectly organized and stress-free.",
    img: "images/users.avif"
  },
  {
    id: 2,
    name: "Mohammed Ali",
    designation: "Traveller",
    review: "Incredible experience! The destinations, food, and guides were beyond expectations.",
    img: "images/users.avif"
  },
  {
    id: 3,
    name: "Sofia Martinez",
    designation: "Traveller",
    review: "Loved every moment of our tour. The views were breathtaking, and the planning was flawless.",
    img: "images/users.avif"
  },
  {
    id: 4,
    name: "Daniel Kim",
    designation: "Traveller",
    review: "Highly recommend this travel agency! Smooth booking and top-notch support throughout.",
    img: "images/users.avif"
  },
  {
    id: 5,
    name: "Priya Desai",
    designation: "Traveller",
    review: "A beautiful, well-organized tour. Great accommodations, and the guides were super friendly!",
    img: "images/users.avif"
  }
];

export default function Stroies(){
  return ( <div className="flex flex-col gap-8 w-full overflow-hidden ">
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-4">
        <span className="text-[#113A75] text-5xl text-center">
          Enjoy the Perfect Trip Created by Experts.
        </span>
        <span className="text-slate-500 text-center max-w-2xl">
          Discover some of our Exclusive Tour Packges that highlight the unique
          aspects of each location.
        </span>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden ">
        <div className="flex animate-scroll gap-6 w-max">
          {[...customers, ...customers].map((customer, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-[#EEF8FF]  shadow-md rounded-lg p-4 min-w-[300px] max-w-[320px]"
            >
              <div className="flex flex-row"><img
                src={customer.img}
                alt={customer.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />

              {/* Text Content */}
              <div className="flex flex-col">
                <span className="font-lato text-2xl text-[#113A75]">{customer.name}</span>
                <span className="text-md text-slate-500 mb-2">
                  {customer.designation}
                </span>
                <div className="h-20"></div>
               
              </div></div>
              {/* Image */}
              <p className="text-slate-600 ">&quot;{customer.review}&quot;</p> 
            </div>
          ))}
        </div>
      </div>
    </div>)
  }