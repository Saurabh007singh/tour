export default function Contact() {
  return (
    <div className="flex flex-col bg-white px-2 pb-12 w-full">
      {/* Banner Section */}
      <div className="relative">
        <img
          src="/images/banner1.avif"
          alt="contact-banner"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-b-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between w-full px-4 md:px-20 lg:px-40 gap-12 mt-12">
        
        {/* Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-blue-600">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            We’d love to hear from you! Whether you have questions, need 
            assistance, or want to plan your next adventure with 
            <span className="font-semibold"> Uttam Travells</span>, feel free 
            to reach out to us.
          </p>

          <div className="space-y-4">
            <p className="text-gray-700">
              📍 <span className="font-semibold">Address:</span> 123, Travel Street, Delhi, India
            </p>
            <p className="text-gray-700">
              📞 <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p className="text-gray-700">
              ✉️ <span className="font-semibold">Email:</span> info@uttamtravells.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-blue-50 rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full px-4 md:px-20 lg:px-40 mt-12">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Find Us on Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83925964653!2d77.06889791242198!3d28.52728034308162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1b5e0a3c23%3A0x9cb70d67c4e2e10!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1698325024917!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
