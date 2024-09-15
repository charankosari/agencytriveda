
import React, { useState } from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of web development services including landing pages, portfolios, and custom websites."
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us via the contact form on our website or email us directly at contact@triveda.com."
  },
  {
    question: "What is the typical turnaround time for a project?",
    answer: "Our typical turnaround time is 2-4 weeks depending on the complexity of the project."
  },
 
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='px-4 md:px-8 lg:px-12 mt-12 font-sora'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 text-gray-100'>
        Frequently Asked Questions
      </h1>
      <section className="bg-gray-950 rounded-sm shadow-md font-sora">
        <div className="w-full px-6 py-8 mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-sm shadow-sm border border-gray-700 overflow-hidden">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-4 text-left text-sm md:text-md lg:text-lg font-medium text-gray-100 bg-gray-900  focus:outline-none rounded-t-lg transition-all duration-300 ease-in-out "
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className={`ml-2 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <p className="text-gray-200 text-sm md:text-md lg:text-lg ">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
