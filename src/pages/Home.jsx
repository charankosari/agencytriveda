import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import WorkProof from './WorkProof';
import Testimonils from './Testimonils';
import FAQSection from './FAQ';
import ContactUs from './Contactus';
import Footer from './Footer';
import Clients from './Clients';


export default function Home() {

  return (
    <div className='px-customPaddingMobile bg-black text-white md:px-customPadding'>

      <Hero></Hero>
      <About />
      <Clients />
      <Services />
      <WorkProof />
      <Testimonils />
      <FAQSection />
      <ContactUs />
      <Footer />
    </div>


  );
}
