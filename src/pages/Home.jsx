import React from 'react';
import Button from '../components/Button';
import Sidepic from '../assets/images/sidepic.jpg'
import About from './About';
import Services from './Services';
import WorkProof from './WorkProof';
import Testimonils from './Testimonils';
import FAQSection from './FAQ';
import ContactUs from './Contactus';
import Footer from './Footer';
import Clients from './Clients';
import Logo from '../assets/images/land.png';
import { Link } from 'react-router-dom';


export default function Home() {

  return (
    <div className='px-customPaddingMobile bg-black text-white md:px-customPadding'>
    <div className='flex flex-col md:flex-row min-h-screen font-sora'>
      <div className=' w-full lg:w-1/2'>
        <div className='flex flex-col space-y-4 mt-4 md:mt-16 lg:mt-28 px-customPaddingMobile items-start justify-center'>
          <h1 className='font-sora text-textPrimary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight'>
            Triveda
          </h1>
          <h1 className='text-gray-50 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
            Crafting Custom Solutions from Vision to Victory
          </h1>
          <p className='text-gray-50 text-sm sm:text-lg md:text-xl lg:text-xl max-w-lg leading-relaxed'>
            Triveda turns your vision into reality with custom solutions...
          </p>
        </div>
        <div className='flex mt-6 space-x-4'>
          <Link to='/portfolio'><Button label="See our Work" /></Link>
          <Link to='/contact'><Button label="Contact us" /></Link>
        </div>
      </div>
      <div className=' md:mb-32 flex items-center justify-center w-full lg:w-1/2'>
        <img
          src={Logo}
          alt="Logo"
          className="w-[350px] md:w-[400px] lg:w-[500px] animate-float"
        />
      </div>
    </div>
    {/* Components */}
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
