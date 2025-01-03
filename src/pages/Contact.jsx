import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "../components/Alert";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertState, setAlertState] = useState(false);

  const gradientStyle = {
    backgroundImage: "linear-gradient(to right, #6C0A0A, #D33D3D)",
    color: "white",
    textAlign: "center",
  };
  const countryCodes = [
    "+1",
    "+1-767",
    "+1-809",
    "+20",
    "+27",
    "+30",
    "+31",
    "+32",
    "+33",
    "+34",
    "+36",
    "+39",
    "+40",
    "+44",
    "+46",
    "+47",
    "+48",
    "+49",
    "+51",
    "+52",
    "+54",
    "+55",
    "+56",
    "+57",
    "+58",
    "+60",
    "+61",
    "+62",
    "+63",
    "+64",
    "+65",
    "+66",
    "+81",
    "+82",
    "+84",
    "+86",
    "+90",
    "+91",
    "+92",
    "+93",
    "+94",
    "+95",
    "+98",
    "+212",
    "+213",
    "+218",
    "+220",
    "+221",
    "+222",
    "+223",
    "+224",
    "+225",
    "+226",
    "+227",
    "+228",
    "+229",
    "+230",
    "+231",
    "+232",
    "+233",
    "+234",
    "+235",
    "+236",
    "+237",
    "+238",
    "+239",
    "+240",
    "+241",
    "+242",
    "+243",
    "+248",
    "+249",
    "+250",
    "+251",
    "+252",
    "+255",
    "+256",
    "+257",
    "+258",
    "+260",
    "+261",
    "+262",
    "+263",
    "+264",
    "+265",
    "+266",
    "+267",
    "+268",
    "+269",
    "+291",
    "+297",
    "+298",
    "+299",
    "+350",
    "+351",
    "+352",
    "+353",
    "+354",
    "+355",
    "+356",
    "+357",
    "+358",
    "+359",
    "+370",
    "+371",
    "+372",
    "+373",
    "+374",
    "+375",
    "+376",
    "+377",
    "+378",
    "+380",
    "+381",
    "+382",
    "+385",
    "+386",
    "+387",
    "+389",
    "+420",
    "+421",
    "+423",
    "+850",
    "+852",
    "+853",
    "+855",
    "+856",
    "+880",
    "+886",
    "+960",
    "+961",
    "+962",
    "+963",
    "+964",
    "+965",
    "+966",
    "+967",
    "+968",
    "+971",
    "+972",
    "+973",
    "+974",
    "+975",
    "+976",
    "+977",
    "+992",
    "+993",
    "+994",
    "+995",
    "+996",
    "+998",
    "+670",
    "+676",
    "+677",
    "+678",
    "+679",
    "+680",
    "+681",
    "+682",
    "+683",
    "+685",
    "+686",
    "+687",
    "+688",
    "+689",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false);
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await axios.post(
        `${apiUrl}/api/website/contact/addContact`,
        {
          clientName,
          phoneNumber,
          countryCode,
          email,
          message,
        }
      );

      // If successful, reset form fields
      setLoading(true);
      setClientName("");
      setEmail("");
      setmessage("");
      setCountryCode("+91");
      setNumber("");
      setAlertMessage("Message sent! We'll get back to you shortly.");
      setAlertType("success");
      setAlertState(true);
      await RemoveAlert();
    } catch (error) {
      setLoading(true);
      setAlertState(true);
      console.error("Error submitting contact details:", error);

      if (error.response && error.response.status === 400) {
        const validationErrors = error.response.data.errors;
        setAlertMessage(validationErrors.join(" "));
        setAlertType("error");
        setAlertState(true);
      } else {
        setAlertMessage("Oops! Something went wrong. Please try again.");
        setAlertType("error");
        setAlertState(true);
      }
    }
  };

  const RemoveAlert = () => {
    setTimeout(() => {
      setAlertState(false);
      setAlertMessage(" ");
      setAlertType(" ");
    }, 5000);
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - Triveda Agency</title>
        <meta
          name="description"
          content="Get in touch with Triveda Agency for your branding, marketing, and development needs. We're here to help you succeed."
        />
        <meta name="author" content="Triveda Agency" />
        <meta property="og:title" content="Contact Us - Triveda Agency" />
        <meta
          property="og:description"
          content="Reach out to Triveda Agency to discuss your next big project or for any inquiries."
        />
        <meta
          property="og:image"
          content="/assets/social-preview-contact.jpg"
        />
        <meta
          property="og:url"
          content="https://agency.trivedagroup.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Triveda Agency" />
        <link rel="canonical" href="https://agency.trivedagroup.com/contact" />
      </Helmet>
      <div className="flex items-center flex-col justify-center h-screen bg-black px-4 text-gray-100 font-sora">
        {alertState && <Alert type={alertType} message={alertMessage}></Alert>}
        <div className="w-full max-w-3xl p-8 md:p-12 lg:p-16 bg-light border border-borderColor border-opacity-35 rounded-lg shadow-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Contact Us
          </h1>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="lg:w-full">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-borderColor border-opacity-25 rounded-lg bg-inputColor text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    value={clientName}
                    required
                    onChange={(e) => setClientName(e.target.value)}
                  />
                  <div className="flex items-center border overflow-hidden  border-borderColor border-opacity-25 rounded-lg focus-within:ring-1 focus-within:ring-rose-500 bg-inputColor">
                    <select
                      className="w-20 md:w-24 h-full px-2 bg-inputColor  text-gray-500 focus:outline-none"
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
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-borderColor border-opacity-25 rounded-lg bg-inputColor text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-borderColor border-opacity-25 rounded-lg bg-inputColor text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  rows="4"
                  value={message}
                  required
                  onChange={(e) => setmessage(e.target.value)}
                ></textarea>
                <button
                  style={gradientStyle}
                  type="submit"
                  className="w-full py-3 px-4 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition duration-300 ease-in-out "
                >
                  {loading ? "Send Message" : "Sending"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
