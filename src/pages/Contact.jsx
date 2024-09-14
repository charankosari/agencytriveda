import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [loading,setLoading] = useState(true)
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false)
      const apiUrl = import.meta.env.VITE_API_URL;
      const phone = countryCode.concat(phoneNumber);

      const response = await axios.post(`${apiUrl}/api/website/contact/addContact`, {
        clientName,
        phoneNumber: phone,
        email,
        message,
      });
  
      setLoading(true)
      setClientName('');
      setEmail('');
      setmessage('');
      setCountryCode('+91');
      setNumber('');
    } catch (error) {
      console.error('Error submitting contact details:', error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-950 px-4 text-gray-100 font-sora'>
      <div className='w-full max-w-3xl p-8 md:p-12 lg:p-16 bg-gray-900 rounded-lg shadow-lg'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8'>
          Contact Us
        </h1>
        <div className='flex flex-col lg:flex-row lg:space-x-12'>
          <div className='lg:w-full'>
            <h2 className='text-xl font-semibold mb-4'>Get in Touch</h2>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div className='space-y-4'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                  value={clientName}
                  required
                  onChange={(e) => setClientName(e.target.value)}
                />
                <div className="flex items-center border overflow-hidden border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-gray-900">
                  <select
                    className="w-20 md:w-24 px-4 py-3 bg-gray-800 border-gray-600 text-gray-500 focus:outline-none"
                    value={countryCode}
                    required
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 focus:outline-none bg-gray-900 text-gray-200"
                    value={phoneNumber}
                    required
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                placeholder='Your Message'
                className='w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                rows='4'
                value={message}
                required
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
              <button
                type='submit'
                className='w-full py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-500'
              >
               {loading ? 'Send Message':'Sending'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
