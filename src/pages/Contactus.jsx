import React, { useState } from 'react';
import axios from 'axios';
import Alert from '../components/Alert';

const ContactUs = () => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [loading, setLoading] = useState(false); // Initially set to false
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

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
    setLoading(true); 
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
     

      await axios.post(`${apiUrl}/api/website/contact/addContact`, {
        clientName,
        phoneNumber,
        countryCode,
        email,
        message,
      });

 
      setClientName('');
      setEmail('');
      setMessage('');
      setCountryCode('+91');
      setPhoneNumber('');
      setAlertMessage('Message sent successfully!');
      setAlertType('success');
    } catch (error) {
      console.error('Error submitting contact details:', error);
      setAlertMessage('Failed to send message. Please try again later.');
      setAlertType('error');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className=' md:px-8 lg:px-12 py-12 font-sora'>
   
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 text-gray-100'>
      Contact Us
      </h1>
      {/* Alert Component */}
      {alertType && <Alert type={alertType} message={alertMessage} />}

      <div className="bg-light border-[1px] border-borderColor border-opacity-35 rounded-xl shadow-lg">
        <div className="w-full px-6 py-10 mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className='text-2xl font-semibold mb-6 text-white'>Get in Touch</h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-borderColor border-opacity-25 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500 bg-inputColor text-gray-200"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                  <div className="flex items-center border overflow-hidden  border-borderColor border-opacity-25 rounded-lg focus-within:ring-1 focus-within:ring-rose-500 bg-inputColor">
                    <select
                      className="w-20 md:w-24 h-full px-2 bg-inputColor bg-opacity-95   text-gray-500 focus:outline-none"
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
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 focus:outline-none bg-inputColor text-gray-200"
                      value={phoneNumber}
                      required
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border-borderColor border-opacity-25 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500 bg-inputColor text-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-borderColor border-opacity-25 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500 bg-inputColor text-gray-200"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-rose-500 hover:via-rose-400 hover:to-rose-300 focus:outline-none "
                >
                  {loading ? 'Sending...' : 'Send Message'}
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
              Phone: <a href="tel:+919110326779" className="hover:text-white transition-colors duration-200">+919110326779</a>
              </p>
              <p className='text-gray-400 mb-4'>
              Email: <a href="mailto:trivedaofficial@gmail.com" className="hover:text-white transition-colors duration-200">trivedaofficial@gmail.com</a>
              </p>

              <p className="text-gray-400">
           
               Follow us
                <div className="flex space-x-4 justify-start md:justify-start mt-6">
                  {/* LinkedIn Icon */}
                  <a href="https://www.linkedin.com/company/trivedhaofficial/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.382c.888-.831 2.06-1.382 3.5-1.382 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
                    </svg>
                  </a>

                  {/* Instagram Icon */}
                  <a href="https://www.instagram.com/triveda_official?igsh=MTR5anFtMXp4OXNkdQ==" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.98.24 2.43.403.6.21 1.037.458 1.49.912.454.453.702.89.912 1.49.163.45.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.98-.403 2.43-.21.6-.458 1.037-.912 1.49-.453.454-.89.702-1.49.912-.45.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.98-.24-2.43-.403-.6-.21-1.037-.458-1.49-.912-.454-.453-.702-.89-.912-1.49-.163-.45-.347-1.26-.403-2.43-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.98.403-2.43.21-.6.458-1.037.912-1.49.453-.454.89-.702 1.49-.912.45-.163 1.26-.347 2.43-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.262 0-3.67.012-4.947.072-1.276.059-2.154.27-2.91.57-.793.314-1.47.733-2.148 1.41-.677.678-1.096 1.355-1.41 2.148-.3.756-.511 1.634-.57 2.91-.06 1.277-.072 1.685-.072 4.947s.012 3.67.072 4.947c.059 1.276.27 2.154.57 2.91.314.793.733 1.47 1.41 2.148.678.677 1.355 1.096 2.148 1.41.756.3 1.634.511 2.91.57 1.277.06 1.685.072 4.947.072s3.67-.012 4.947-.072c1.276-.059 2.154-.27 2.91-.57.793-.314 1.47-.733 2.148-1.41.677-.678 1.096-1.355 1.41-2.148.3-.756.511-1.634.57-2.91.06-1.277.072-1.685.072-4.947s-.012-3.67-.072-4.947c-.059-1.276-.27-2.154-.57-2.91-.314-.793-.733-1.47-1.41-2.148-.678-.677-1.355-1.096-2.148-1.41-.756-.3-1.634-.511-2.91-.57-1.277-.06-1.685-.072-4.947-.072z" />
                      <path d="M12 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.164a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-10.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                    </svg>
                  </a>
                </div>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
