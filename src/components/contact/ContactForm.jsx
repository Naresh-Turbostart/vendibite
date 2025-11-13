"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./style.css";
import { trackEvent, trackPageView } from "@/helper/mixpanelClient";

const ContactForm = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    trackPageView();
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (typeof window === "undefined") return;

      if (event.origin !== window.location.origin) return;
      if (!event.data || typeof event.data !== "object") return;
      if (iframeRef.current?.contentWindow && event.source !== iframeRef.current.contentWindow) {
        return;
      }

      const { type, payload } = event.data;
      if (type !== "leadFormSubmitted" || !payload || typeof payload !== "object") {
        return;
      }

      const safe = (value) => (value ?? "").toString().trim();

      trackEvent("Lead Form Submission", {
        "First Name": safe(payload.firstName),
        "Last Name": safe(payload.lastName),
        Email: safe(payload.email),
        Phone: safe(payload.phone),
        "Interested On": safe(payload.interestedOn),
        Source: safe(payload.source) || "public/form.html",
      });
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div
      className="text-white section-width pb-10 py-5 margin-top"
      id="contact"
    >
      <div className="container flex justify-center flex-col">
        <h2 className="mb-3 sm:mb-4  text-center pb-3 sm:pb-8 tracking-normal text-[#020817]">
          Get in Touch ?
        </h2>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
          {/* Left Form - Takes 2/3 width on large screens */}
          <div className="bg-gradient-to-b from-[#001744] to-[#001744] rounded-lg lg:col-span-2 custom-border card-background flex flex-col ">
            {/* Iframe Form */}
            <div className="flex-grow">
              <iframe
                ref={iframeRef}
                src="form.html"
                width="100%"
                height="200"
                className="w-full h-[355px] md:h-[360px] lg:h-[355px] xl:h-[250px] border-none"
                title="Contact Form"
              />
            </div>
          </div>

          {/* Right Information Boxes - Takes 1/3 width on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Second Card - Contact Number */}

            <div className="bg-gradient-to-b from-[#001744] to-[#001744] p-4 sm:p-6 lg:py-10 xl:py-6 xl:p-6 rounded-lg custom-border card-background flex flex-col justify-center cursor-pointer">
              <div className="flex items-start gap-4 h-full">
                <div className="flex-shrink-0">
                  <FaPhoneAlt className="xl:w-10 lg:w-8 md:w-8 w-10 h-full group-hover:text-white transition-colors text-[#BEFF4E]" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-light mb-3 text-white tracking-normal">
                    Phone
                  </h3>
                  <a
                    href="tel:9321226164"
                    className="text-gray-400 text-sm sm:text-base mb-1"
                  >
                    +91 9321226164
                  </a>
                </div>
              </div>
            </div>

            {/* Third Card - Social Media */}
            <a
              href="mailto:kagpatradigitech@gmail.com"
              className="block transition-all duration-200"
            >
              <div className="bg-gradient-to-b from-[#001744] to-[#001744] p-4 sm:p-6 lg:py-10 xl:py-6 lg:pl-4 xl:p-6  rounded-lg custom-border card-background flex flex-col justify-center cursor-pointer">
                <div className="flex items-start gap-4 h-full">
                  <div className="flex-shrink-0">
                    <IoMdMail className="xl:w-10 lg:w-8 md:w-8 w-10 h-full group-hover:text-white transition-colors text-[#BEFF4E]" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-light mb-3 text-white tracking-normal">
                      Reach out to us
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-1">
                      contact@vendibite.co.in
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
