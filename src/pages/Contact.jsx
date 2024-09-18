import React, { useState } from 'react';
import axios from 'axios';
import Alert from '../components/Alert';

const ContactUs = () => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [loading, setLoading] = useState(true)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  const countryCodes = [
    "+1", "+1-767", "+1-809", "+20", "+27", "+30", "+31", "+32", "+33", "+34",
    "+36", "+39", "+40", "+44", "+46", "+47", "+48", "+49", "+51", "+52", "+54",
    "+55", "+56", "+57", "+58", "+60", "+61", "+62", "+63", "+64", "+65", "+66",
    "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94", "+95", "+98",
     "+212", "+213", "+218", "+220", "+221", "+222", "+223", "+224",
    "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233", "+234",
    "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243", "+248",
    "+249", "+250", "+251", "+252", "+255", "+256", "+257", "+258", "+260", "+261",
    "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+291", "+297",
    "+298", "+299", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357",
    "+358", "+359", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377",
    "+378", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+420", "+421",
    "+423", "+850", "+852", "+853", "+855", "+856", "+880", "+886", "+960", "+961",
    "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+971", "+972", "+973",
    "+974", "+975", "+976", "+977", "+992", "+993", "+994", "+995", "+996", "+998",
    "+670", "+676", "+677", "+678", "+679", "+680", "+681", "+682", "+683", "+685",
    "+686", "+687", "+688", "+689"
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false);
      const apiUrl = import.meta.env.VITE_API_URL;


      const response = await axios.post(`${apiUrl}/api/website/contact/addContact`, {
        clientName,
        phoneNumber,
        countryCode,
        email,
        message,
      });

      // If successful, reset form fields
      setLoading(true);
      setClientName('');
      setEmail('');
      setmessage('');
      setCountryCode('+91');
      setNumber('');
      setAlertMessage("Message sent! We'll get back to you shortly.");
      setAlertType("success");

    } catch (error) {
      setLoading(true);
      console.error('Error submitting contact details:', error);

      // Check if the error response is a validation error (status 400)
      if (error.response && error.response.status === 400) {
        const validationErrors = error.response.data.errors;
        setAlertMessage(validationErrors.join(' ')); // Combine validation messages into a single string
        setAlertType("error");
      } else {
        setAlertMessage("Oops! Something went wrong. Please try again.");
        setAlertType("error");
      }
    }
  };


  return (
    <div className='flex items-center flex-col justify-center h-screen bg-black px-4 text-gray-100 font-sora'>

      {alertType && <Alert type={alertType} message={alertMessage}></Alert>}
      <div className='w-full max-w-3xl p-8 md:p-12 lg:p-16 bg-light border-[1px] border-gray-900 border-opacity-35 rounded-lg shadow-2xl'>
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
                  className='w-full px-4 py-3 border border-borderColor rounded-lg bg-inputColor text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                  value={clientName}
                  required
                  onChange={(e) => setClientName(e.target.value)}
                />
                <div className="flex items-center border overflow-hidden border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-rose-500 bg-gray-900">
                  <select
                    className="w-20 md:w-24 h-full py-3 px-2 bg-inputColor border-gray-600 text-gray-500 focus:outline-none"
                    value={countryCode}
                    required
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 focus:outline-none bg-inputColor text-gray-200"
                    value={phoneNumber}
                    required
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>

                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full px-4 py-3 border border-borderColor rounded-lg bg-inputColor text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                placeholder='Your Message'
                className='w-full px-4 py-3 border border-borderColor rounded-lg bg-inputColor text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                rows='4'
                value={message}
                required
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
              <button
                type='submit'
                className='w-full py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-500'
              >
                {loading ? 'Send Message' : 'Sending'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
