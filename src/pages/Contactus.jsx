import React from 'react';

const ContactUs = () => {
  return (
    <div className='px-4 md:px-8 lg:px-12 py-12 font-sora '>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white'>
        Contact Us
      </h1>
      <section className="bg-light border-[1px] border-gray-900 border-opacity-35 rounded-xl shadow-lg">
        <div className="w-full px-6 py-10 mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className='text-2xl font-semibold mb-6 text-white'>
                Get in Touch
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                    required
                  />
                  <div className="flex items-center border border-gray-700 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-gray-800 overflow-hidden">
                    <select
                      className="w-20 md:w-24 px-4 py-3 bg-gray-700 border-none text-gray-500 focus:outline-none"
                      defaultValue="+91"
                      required
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 focus:outline-none bg-gray-800 text-gray-200"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                  rows="5"
                  required
                ></textarea>
        <button
  type="submit"
  className="w-full py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-rose-500 hover:via-rose-400 hover:to-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-500"
>
  Send Message
</button>


              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <h2 className='text-2xl font-semibold mb-6 text-white'>
                Our Contact Information
              </h2>
              <p className='text-gray-400 mb-4'>
                <strong>Address:</strong> Hyderabad, India
              </p>
              <p className='text-gray-400 mb-4'>
                <strong>Phone:</strong> +91 60000 34987
              </p>
              <p className='text-gray-400 mb-4'>
                <strong>Email:</strong> contact@triveda.com
              </p>
            
              <p className="text-gray-400">
                <strong>Socials:</strong> Follow us on LinkedIn, Twitter, and Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
