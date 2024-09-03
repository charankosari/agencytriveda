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


export default function Home() {
  return (
    <div className='px-customPaddingMobile bg-gray-950 text-white md:px-customPadding  '>
      <div className='flex flex-col space-y-10  md:flex-row  font-sora  '>
        <div className='mb-10'>
          <div className='flex flex-col space-y-2 mt-12  md:mt-48 px-customPaddingMobile items-start justify-center'>
            <h1 className='font-sora text-textPrimary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-topToBottom'>
              Triveda
            </h1>
            <h1 className=' text-gray-50 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-topToBottom'>
              Crafting Custom Solutions from Vision to Victory
            </h1>
            <p className='text-gray-50  text-sm sm:text-lg md:text-xl lg:text-xl animate-topToBottom '>
              Triveda turns your vision into reality with custom solutions. From concept to launch, we have the expertise to deliver tailored digital experiences that stand out.
            </p>
          </div>
          <div className='flex flex-row mt-6 ml-3 '>
            <div className=' animate-topToBottom  ' >
              <Button label="See our Work" />
            </div>
            <div className='animate-topToBottom ' >
              <Button label="Contact us"  />
            </div>
          </div>
        </div>
        <div className='flex items-end justify-center'>
          <img src={Sidepic} width={800} height={800}></img>
        </div>
     
      </div>
      <About/>
      <Clients/>
      <Services/>
      <WorkProof/>
      <Testimonils/>
      <FAQSection/>
      <ContactUs/>
      <Footer/>
    </div>

  );
}
