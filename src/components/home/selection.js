export default function Selection() {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-4 py-0">
      {/* Destination */}
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="destination" className="text-black font-lato">
          Destination
        </label>
        <select
          id="destination"
          className="border border-none bg-[#E2F3FF] rounded-sm h-12 px-3 font-lato focus:outline-none focus:ring-2 focus:ring-[#113A75] text-slate-600"
        >
          <option value="" className="text-slate-600">Select a destination</option>
          <option value="paris" className="text-slate-600">Paris</option>
          <option value="newyork" className="text-slate-600">New York</option>
          <option value="tokyo" className="text-slate-600">Tokyo</option>
        </select>
      </div>

      {/* Start Date */}
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="start-date" className="text-black font-lato">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          className="border border-none bg-[#E2F3FF] rounded-sm h-12 px-3 font-lato focus:outline-none focus:ring-2 focus:ring-[#113A75]  text-slate-600"
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="end-date" className="text-black font-lato">
          End Date
        </label>
        <input
          type="date"
          id="end-date"
          className="border border-none bg-[#E2F3FF] rounded-sm h-12 px-3 font-lato focus:outline-none focus:ring-2 focus:ring-[#113A75]  text-slate-600"
        />
      </div>

      {/* Adults */}
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="adults" className="text-black font-lato">
          No. of Adults
        </label>
        <select
          id="adults"
          className="border border-none bg-[#E2F3FF] rounded-sm h-12 px-3 font-lato focus:outline-none focus:ring-2 focus:ring-[#113A75]  text-slate-600"
        >
          <option value="" className="text-slate-600">Select</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Button */}
      <div className="w-full md:max-w-[200px] flex mt-auto">
        <button className="h-12  rounded-sm w-full bg-[#113A75] font-lato text-white hover:scale-95 transition text-[18px] hover:bg-[#113A75]-background duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}
