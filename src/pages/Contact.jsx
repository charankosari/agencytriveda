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
    "+93", "+355", "+213", "+376", "+244", "+54", "+374", "+297", "+61", "+43",
    "+994", "+973", "+880", "+375", "+32", "+501", "+229", "+975", "+591", "+387",
    "+267", "+55", "+359", "+226", "+257", "+855", "+237", "+1", "+238", "+236",
    "+235", "+56", "+86", "+57", "+269", "+243", "+242", "+682", "+506", "+385",
    "+53", "+357", "+420", "+45", "+253", "+1-767", "+1-809", "+670", "+593",
    "+20", "+503", "+240", "+291", "+372", "+251", "+679", "+358", "+33", "+241",
    "+220", "+995", "+49", "+233", "+350", "+30", "+299", "+502", "+224", "+245",
    "+592", "+509", "+504", "+852", "+36", "+354", "+91", "+62", "+98", "+964",
    "+353", "+972", "+39", "+225", "+81", "+962", "+254", "+686", "+965", "+996",
    "+856", "+371", "+961", "+266", "+231", "+218", "+423", "+370", "+352", "+853",
    "+389", "+261", "+265", "+60", "+960", "+223", "+356", "+692", "+222", "+230",
    "+52", "+691", "+373", "+377", "+976", "+382", "+212", "+258", "+95", "+264",
    "+674", "+977", "+31", "+64", "+505", "+227", "+234", "+47", "+968", "+92",
    "+680", "+507", "+675", "+595", "+51", "+63", "+48", "+351", "+974", "+40",
    "+250", "+685", "+378", "+966", "+221", "+381", "+248", "+232", "+65", "+421",
    "+386", "+677", "+252", "+27", "+82", "+34", "+94", "+249", "+597", "+268",
    "+46", "+41", "+963", "+886", "+992", "+255", "+66", "+228", "+676", "+216",
    "+90", "+993", "+688", "+256", "+380", "+971", "+44", "+1", "+598", "+998",
    "+678", "+58", "+84", "+967", "+260", "+263"
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
                  className='w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500'
                  value={clientName}
                  required
                  onChange={(e) => setClientName(e.target.value)}
                />
            <div className="flex items-center border overflow-hidden border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-gray-900">
  <select
    className="w-20 md:w-24 h-full py-3 px-2 bg-gray-800 border-gray-600 text-gray-500 focus:outline-none"
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
