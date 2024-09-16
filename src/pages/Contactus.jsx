import React, { useState } from 'react';
import axios from 'axios';
import Alert from '../components/Alert'; // Assuming you have an Alert component

const ContactUs = () => {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
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
      const phone = countryCode.concat(phoneNumber);

      // Make POST request to API
      const response = await axios.post(`${apiUrl}/api/website/contact/addContact`, {
        clientName,
        phoneNumber: phone,
        email,
        message,
      });

      // Reset form and show success message
      setLoading(true);
      setClientName('');
      setEmail('');
      setMessage('');
      setCountryCode('+91');
      setPhoneNumber('');
      setAlertMessage('Message sent successfully!');
      setAlertType('success');
    } catch (error) {
      console.error('Error submitting contact details:', error);
      setLoading(true);
      setAlertMessage('Failed to send message. Please try again later.');
      setAlertType('error');
    }
  };

  return (
    <div className='px-4 md:px-8 lg:px-12 py-12 font-sora'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white'>
        Contact Us
      </h1>

      {/* Alert Component */}
      {alertType && <Alert type={alertType} message={alertMessage} />}

      <div className="bg-light border-[1px] border-gray-900 border-opacity-35 rounded-xl shadow-lg">
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
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                  <div className="flex items-center border overflow-hidden border-gray-600 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-gray-900">
  <select
    className="w-20 md:w-24 h-full px-2 bg-gray-800 border-gray-600 text-gray-500 focus:outline-none"
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
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-rose-500 hover:via-rose-400 hover:to-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-500"
                >
                  {loading ? 'Send Message' : 'Sending...'}
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

              {/* Social Media Icons */}
              <p className="text-gray-400">
                <strong>Socials:</strong> Follow us
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









