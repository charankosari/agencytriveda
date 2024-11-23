import React from "react";
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import WorkProof from "./WorkProof";
import Testimonils from "./Testimonils";
import FAQSection from "./FAQ";
import ContactUs from "./Contactus";
import Footer from "./Footer";
import Clients from "./Clients";

export default function Home() {
  return (
    <div className="px-customPaddingMobile bg-black text-white md:px-customPadding">
      <Helmet>
        <title>Triveda Agency</title>
        <meta
          name="description"
          content="Triveda Agency – Crafting Custom Solutions from Vision to Victory."
        />
        <meta
          name="keywords"
          content="Triveda Agency, branding, marketing, web design, creative agency, business strategy, digital solutions, web development, app development, agency, triveda, trivedagroup, triveda group"
        />
        <meta name="author" content="Triveda Agency" />
        <meta property="og:title" content="Triveda Agency" />
        <meta
          property="og:description"
          content="Triveda turns your vision into reality with custom solutions that drive success and innovation."
        />
        <meta property="og:image" content="/assets/images/logo.png" />
        <meta property="og:url" content="https://agency.trivedagroup.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Triveda Agency" />
        <link rel="canonical" href="https://agency.trivedagroup.com" />
      </Helmet>

      <Hero />
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
