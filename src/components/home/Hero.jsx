"use client";
import Image from "next/image";
import Link from "next/link";
import VideoComponent from "./components/VideoComponnet";

const Hero = () => {
  return (
    <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-[#030716]  ">
      <div className="section-width padding-bottom padding-top">
        {/* Content Grid */}
        <div className="relative z-10 flex w-full  flex-col items-center justify-between xl:gap-14 xl:flex-row">
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Label */}
            <div className="mb-3 gap-3  flex flex-row justify-end items-end leading-none  header-text tracking-widest text-[#B6FF00] ">

            <div>
              AS SEEN ON{" "}

            </div>
              <Image
                src="/images/hero/ideabaazlogo.svg"
                width={1000}
                height={1000}
                alt="IdeaBaaz Logo"
                className=" w-[70px]  md:w-[70px]"
              />
            </div>

            {/* Heading */}
            <h1 className=" text-white xl:whitespace-nowrap ">
              Engineering the Future of <br className="hidden md:block"/>
              Unmanned Access
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[480px] text-white font-light text-sm leading-relaxed">
              VendiBite is an OEM manufacturing platform that designs and builds
              intelligent kiosks powering 24×7 access to food, essentials, and
              beyond.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full justify-center md:justify-start flex-wrap items-center gap-4">
              {/* Watch Feature Button */}
              <Link
                href="https://www.zee5.com/tv-shows/details/ideabaaz/0-6-4z5840913"
                target="_blank"
                className="flex  items-center justify-center gap-2  bg-[#BEFF4E] px-4 py-2 md:px-6 md:py-3 text-sm font-semibold text-[#0A0F1A] transition hover:bg-[#d5ff5e]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-4.197-2.42A1 1 0 009 9.618v4.764a1 1 0 001.555.832l4.197-2.42a1 1 0 000-1.664z"
                  />
                </svg>
                Watch the Feature
              </Link>

              {/* Applications Button */}
              <Link
                href="#applications"
                className="flex  items-center justify-center gap-2 border border-[#BEFF4E] px-6 py-2 md:px-6 md:py-3 text-sm font-semibold text-[#BEFF4E] transition hover:bg-[#B6FF00]/10"
              >
                See Applications →
              </Link>
            </div>

            {/* Footer Note */}
            {/* <p className="mt-6 text-xs text-[#B3B5BA]">
              IoT-enabled • Modular • Reliable • Ready for Any Environment
            </p> */}
             <p className="mt-6 text-xs flex  justify-center  items-center text-[#B3B5BA]">
              <div>IoT-enabled</div>
              <div className="text-[8px] ml-[6px] mr-1">•</div>
              <div>Modular</div>
              <div className="text-[8px] ml-[6px] mr-1">•</div>
              <div>Reliable</div>
              <div className="text-[8px] ml-[6px] mr-1">•</div>
              <div>Ready for Any Environment</div>
            </p>
          </div>

          {/* RIGHT COLUMN — Video Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full">
              <VideoComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
