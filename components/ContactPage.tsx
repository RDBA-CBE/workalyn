"use client";

import React from "react";
import { RevealWrapper } from "./ParallaxWrapper";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24">
        <div className="section-wid px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left: Info */}
            <div>
              <RevealWrapper>
                <h1 className="main-head mb-3">
                  Plaza Damansara’s Most Coveted Professional Enclave
                </h1>
                <p className="mb-6">
                  Whether you have a question about our memberships, locations,
                  or want to discuss a custom suite, we're here to help.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="sub-head uppercase  mb-4">
                      General Inquiries
                    </h3>
                    <p className=" text-[#666666] hover:text-[#000]">
                      <a
                        href="mailto:hello@workalyn.com
"
                      >
                        hello@workalyn.com
                      </a>
                    </p>
                    <p className=" font-sans text-[#666666] hover:text-[#000]">
                      <a href="tel:60312345678">+603 1234 5678</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="sub-head uppercase  mb-4">
                      Workalyn at Plaza Damansara
                    </h3>
                    <p className=" font-sans text-[#666666] ">
                      PL 02 & 03, Block A,
                      <br />
                      Plaza Damansara, <br /> Jalan Medan Setia 1,
                      <br />
                      Bukit Damansara, <br /> 50490 Kuala Lumpur
                    </p>
                    <p className=" font-sans text-[#666666] hover:text-[#000]"></p>
                  </div>

                  <div>
                    <h3 className="sub-head uppercase  mb-4">
                      Operating Hours:
                    </h3>
                    <p className=" font-sans text-[#666666] ">
                      Monday – Friday: 8:00 AM – 8:00 PM
                      <br />
                      Saturday: 9:00 AM – 5:00 PM
                      <br />
                      Sunday & Public Holidays: By Appointment Only
                    </p>
                    <p className=" font-sans text-[#666666] hover:text-[#000]"></p>
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Right: Form */}
            <div className="bg-gray-50 p-12 shadow-sm">
              <RevealWrapper>
                <h2 className="main-head  mb-10">Send Us A Message</h2>
                <form
                  className="space-y-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:border-gold outline-none transition-colors resize-none"
                  ></textarea>
                  <button className="w-full bg-[#00998a] text-white py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gold transition-all duration-500">
                    Submit Inquiry
                  </button>
                </form>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <span className="text-gray-400 sub-head  font-bold uppercase tracking-widest"> */}
           <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7888796779785!2d101.64830868324835!3d3.1503172449777734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49025bc42019%3A0x804e968b8e38d7f7!2sPlaza%20Damansara%2C%2051%2C%20Jalan%20Medan%20Setia%201%2C%20Bukit%20Damansara%2C%2050490%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1771589911221!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Plaza Damansara Location"
      />

          {/* </span> */}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
