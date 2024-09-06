
import React from 'react';

const ContactUs = () => {
  return (
    <div className='px-4 md:px-8 lg:px-12 py-12 font-sora'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8'>
        Contact Us
      </h1>
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="w-full px-6 py-8 mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2">
              <h2 className='text-xl font-semibold mb-4'>Get in Touch</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
                    required
                  />
                  {/* <div className="flex items-center border overflow-hidden border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 dark:bg-gray-900 dark:border-gray-600">
                    <select
                      className=" w-20 md:w-24 px-4 py-3  bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 focus:outline-none"
                      defaultValue="+91"
                      required
                    >
                      <option value="+91">+91 </option>
                      <option value="+1">+1 </option>
                      <option value="+44">+44 </option>
                      <option value="+61">+61 </option>

                    </select>
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-2 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
                      required
                    />
                  </div> */}


                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-rose-500 text-white rounded-lg hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-blue-500  "
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h2 className='text-xl font-semibold mb-4'>Our Contact Information</h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                <strong>Address:</strong> Hyderabad
              </p>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                <strong>Phone:</strong> 6000034987
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                <strong>Email:</strong> contact@triveda.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
