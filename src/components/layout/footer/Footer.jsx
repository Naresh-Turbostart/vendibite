"use client";
import React from "react";
import Image from "next/image";
// import { GoDotFill } from "react-icons/go";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import routes from "@/helper/routes";
import Link from "next/link";

// const handleSmoothScroll = (e) => {
//   e.preventDefault();
//   const target = e.currentTarget.getAttribute("href");
//   const smoother = ScrollSmoother.get();
//   if (smoother && target) {
//     smoother.scrollTo(target, true);
//   }
// };

const Footer = () => {
  return (
    <footer className="text-white bg-[#050038]  border-t-[0.1px] border-white border-opacity-15">
      <div className="section-width py-16 px-12 md:px-0">
        {/* Desktop Layout (md and above) */}
        <div className="hidden lg:block">
          {/* Top Section */}
          <div className="flex flex-row justify-between items-center mb-14">
            {/* Logo on Left */}
            <div>
              <Image
                src="/images/layout/white-logo.png"
                alt="Realm Logo"
                width={1000}
                height={1000}
                className="w-[140px] h-auto object-contain"
              />
            </div>

            {/* Navigation Links on Right */}
            <div className="flex gap-8 lg:gap-12 xl:gap-20">
              <p className="text-white font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
                <a href="#about">About</a>
              </p>
              <p className="text-white font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
                <a href="#solution">Solution </a>
              </p>
              <p className="text-white font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
                <a href="#e-stamp">E-Stamp</a>
              </p>
              <p className="text-white font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
                <a href="#ideabaaz">Ideabaaz </a>
              </p>
              <p className="text-white font-semibold text-xs uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap">
                <a href="#Opportunities">Opportunities </a>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white border-opacity-15 mb-14"></div>

          {/* Bottom Section */}
          <div className="flex  text-center  ">
            {/* Left Side - Social Icons, Copyright and Links */}
            <div className="flex justify-center w-full items-center  gap-4 xl:gap-6">
              {/* Social Icons */}
              {/* <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/layout/face.png"
                  alt="Facebook"
                  width={1000}
                  height={1000}
                  className="h-8 xl:h-10 object-contain w-auto"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/layout/link.png"
                  alt="LinkedIn"
                  width={1000}
                  height={1000}
                  className="h-8 xl:h-10 object-contain w-auto"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/layout/insta.png"
                  alt="Instagram"
                  width={1000}
                  height={1000}
                  className="h-8 xl:h-10 object-contain w-auto"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/layout/you.png"
                  alt="YouTube"
                  width={1000}
                  height={1000}
                  className="h-8 xl:h-10 object-contain w-auto"
                />
              </a> */}

              {/* Copyright and Links */}
              <span className="text-white text-sm ml-2 xl:ml-10">
                © 2025 Print Buddy
              </span>
              {/* <Link
                href={routes.terms}
                className="text-sm text-white hover:text-white transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <Link
                href={routes.privacy}
                className="text-white text-sm hover:text-white transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link> */}
            </div>

            {/* Right Side - App Store, Google Play */}
            {/* <div className="flex items-center gap-4 lg:gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/layout/app-store.png"
                  alt="Download on the App Store"
                  width={1000}
                  height={1000}
                  className="h-10 xl:h-14 object-contain w-auto"
                />
              </a>

              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/layout/play-store.png"
                  alt="Get it on Google Play"
                  width={1000}
                  height={1000}
                  className="h-10 xl:h-14 object-contain w-auto"
                />
              </a>
            </div> */}
          </div>
        </div>

        {/* Mobile Layout (below md) */}
        <div className="block lg:hidden">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/layout/white-logo.png"
              alt="Realm Logo"
              width={1000}
              height={1000}
              className="w-[140px] h-auto object-contain"
            />
          </div>

          {/* Navigation Sections */}
          <div className="flex justify-center ">
            <div className="text-center">
              {/* Explore Section */}
              <div className="mb-8">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Explore
                </h3>
                <div className="space-y-3">
                  <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">
                    <a href="#about">About</a>
                  </p>
                  <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">
                    <a href="#solution"> Solution </a>
                  </p>
                  <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">
                    <a href="#e-stamp">               E-Stamp
</a>
                  </p>
                  <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">
                    <a href="#ideabaaz"> Ideabaaz </a>
                  </p>
                  <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">
                    <a href="#Opportunities"> Opportunities </a>
                  </p>
                </div>
              </div>

              {/* Support Section */}
              <div className="">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Support
                </h3>
                <div className="space-y-3">
                  {/* <p className="text-white/70 text-sm cursor-pointer hover:text-white transition-colors">
                    <a href="#contact" onClick={handleSmoothScroll}>
                      Pricing
                    </a>
                  </p> */}

                  {/* <Link
                    href={routes.terms}
                    className="block text-white/70 text-sm hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href={routes.privacy}
                    className="block text-white/70 text-sm hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link> */}
                  <Link
                    href="/"
                    className="block text-white/70 text-sm hover:text-white transition-colors"
                  >
                    © 2025 Print Buddy{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* App Store Buttons */}
          {/* <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/layout/app-store.png"
                alt="Download on the App Store"
                width={1000}
                height={1000}
                className="h-12 object-contain w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/layout/play-store.png"
                alt="Get it on Google Play"
                width={1000}
                height={1000}
                className="h-12 object-contain w-auto"
              />
            </a>
          </div> */}

          {/* Social Icons */}
          {/* <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/layout/you.png"
                alt="YouTube"
                width={1000}
                height={1000}
                className="h-8 object-contain w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/layout/insta.png"
                alt="Instagram"
                width={1000}
                height={1000}
                className="h-8 object-contain w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/layout/link.png"
                alt="LinkedIn"
                width={1000}
                height={1000}
                className="h-8 object-contain w-auto"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/layout/face.png"
                alt="Facebook"
                width={1000}
                height={1000}
                className="h-8 object-contain w-auto"
              />
            </a>
          </div> */}

          {/* Copyright */}
          {/* <div className="text-center">
            <span className="text-white/70 text-sm">© 2025 Print Buddy</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
