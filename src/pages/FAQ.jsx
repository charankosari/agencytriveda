import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFAQS] = useState([]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    async function getData() {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/api/website/fqa/getFQAs`);
        setFAQS(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="md:px-8 lg:px-12 mt-12 font-sora xl:px-12 1.5xl:px-20 2xl:px-96">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-100">
        Frequently Asked Questions
      </h1>
      <section className="bg-light rounded-lg shadow-lg border border-[#1C1C21] border-opacity-35 font-sora">
        <div className="w-full px-6 py-8 mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#1C1C21] border border-[#1C1C21] border-opacity-35 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-4 text-left text-sm md:text-md lg:text-lg font-semibold text-gray-200 bg-light focus:outline-none rounded-lg transition-all duration-300 ease-in-out "
              >
                <div className="flex  justify-between items-center">
                  <span>{faq.question}</span>
                  <span
                    className={`ml-2 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-[#1C1C21] border-t border-[#1C1C21]">
                  <p className="text-gray-300 text-sm md:text-md lg:text-lg">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
