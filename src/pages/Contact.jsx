import React from 'react';

const ContactUs = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-950 px-4 text-gray-100 font-sora'>
      <div className='w-full max-w-3xl p-8 md:p-12 lg:p-16 bg-gray-900 rounded-lg shadow-lg'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8'>
          Contact Us
        </h1>
        <div className='flex flex-col lg:flex-row lg:space-x-12'>
          <div className='lg:w-full'>
            <h2 className='text-xl font-semibold mb-4'>Get in Touch</h2>
            <form className='space-y-6'>
              <div className='space-y-4'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                  required
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                  required
                />
              </div>
              <textarea
                placeholder='Your Message'
                className='w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                rows='4'
                required
              ></textarea>
              <button
                type='submit'
                className='w-full py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-500'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
