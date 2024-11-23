import React from "react";
import Footer from "./Footer";
import Helmet from "react-helmet";
const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>PrivacyPolicy - Triveda Agency</title>
        <meta
          name="description"
          content="Get in touch with Triveda Agency for your branding, marketing, and development needs. We're here to help you succeed."
        />
        <meta name="author" content="Triveda Agency" />
        <meta property="og:title" content="PrivacyPolicy - Triveda Agency" />
        <meta
          property="og:description"
          content="Reach out to Triveda Agency to discuss your next big project or for any inquiries."
        />
        <meta
          name="keywords"
          content="Triveda Agency, branding, marketing, web design, creative agency, business strategy, digital solutions, web development, app development, agency, triveda, trivedagroup, triveda group"
        />
        <meta property="og:image" content="/assets/image/logo.png" />
        <meta
          property="og:url"
          content="https://agency.trivedagroup.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PrivacyPolicy - Triveda Agency" />
        <link
          rel="canonical"
          href="https://agency.trivedagroup.com/privacy-policy"
        />
      </Helmet>
      <div className="py-12 md:px-8 lg:px-12 font-sora xl:px-12 text-gray-100 bg-black flex items-center flex-col justify-center">
        <div className="w-full max-w-6xl p-8 md:p-12 lg:p-16 bg-light border border-borderColor border-opacity-35 rounded-lg shadow-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8">
            Privacy Policy
          </h1>
          <h2 className="text-xl font-semibold text-white mb-2">
            Effective Date: November 8, 2024
          </h2>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white">
              1. Introduction
            </h3>
            <p className="text-gray-400">
              Welcome to Triveda's website. At Triveda, we value your privacy
              and are committed to protecting the personal information you share
              with us. This Privacy Policy explains how we collect, use, and
              protect your information when you interact with our website,
              particularly through contact forms.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              2. Information We Collect
            </h3>
            <p className="text-gray-400">
              We collect personal information when you voluntarily submit it
              through contact forms on our website. This may include:
            </p>
            <ul className="list-disc ml-8 text-gray-400">
              <li>Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
            </ul>
            <p className="text-gray-400">
              This information is collected to contact you regarding potential
              business opportunities and to provide further information about
              our services.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              3. How We Use Your Information
            </h3>
            <ul className="list-decimal ml-8 text-gray-400">
              <li>
                To Contact You – We use your contact information to communicate
                with you regarding inquiries, project proposals, and potential
                deals related to our services.
              </li>
              <li>
                Service Improvement – We may use feedback and data for research
                and development to improve our services and website
                functionality.
              </li>
              <li>
                Legal Compliance – We may use or disclose your information as
                required by applicable law or regulations.
              </li>
            </ul>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              4. Data Security
            </h3>
            <p className="text-gray-400">
              We take appropriate security measures to protect your personal
              information against unauthorized access, alteration, or
              disclosure. However, please be aware that no method of internet
              transmission is entirely secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              5. Third-Party Disclosure
            </h3>
            <p className="text-gray-400">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties unless required by law or as
              necessary to provide our services.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              6. Cookies and Tracking
            </h3>
            <p className="text-gray-400">
              Our website may use cookies or other tracking technologies to
              improve your experience. You may set your browser to refuse
              cookies, but this may limit certain functionalities on our
              website.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              7. Your Rights
            </h3>
            <ul className="list-disc ml-8 text-gray-400">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of any incorrect or incomplete data.</li>
              <li>
                Request the deletion of your personal data in certain
                circumstances.
              </li>
            </ul>
            <p className="text-gray-400">
              To exercise these rights or for any questions regarding our
              privacy practices, please contact us at Trivedaofficial@gmail.com
            </p>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              8. Changes to This Privacy Policy
            </h3>
            <p className="text-gray-400">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page, and the "Effective Date" at the top will
              reflect when the latest revisions were made.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="text-lg font-semibold text-white mb-1">
              9. Contact Us
            </h3>
            <p className="text-gray-400">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <ul className="text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:Trivedaofficial@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  Trivedaofficial@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+919110326779"
                  className="text-blue-500 hover:underline"
                >
                  +91 9110326779
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
