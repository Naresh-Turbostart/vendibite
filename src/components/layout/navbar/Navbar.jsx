"use client";
import React, { useState } from "react";
import Image from "next/image";
// import ScrollSmoother from "gsap/ScrollSmoother";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" w-full bg-[#011A4A] relative z-10">
      {/* Desktop Navbar */}
      <div className="section-width  ">
        <div className="flex items-center justify-between h-16   rounded-full  ">
          {/* Logo and Navigation Links Container */}
          <div className="flex items-center min-w-0 flex-1">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/layout/logo.png"
                alt="Left Dashboard"
                width={350}
                height={400}
                className="w-[120px] sm:w-[120px] sm:h-[40px] lg:w-[150px] lg:h-[50px] object-contain   flex-shrink-0"
              />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:block ">
              <div className="flex text-black cursor-pointer items-baseline space-x-6 xl:space-x-14">
                <a
                  href="#about"
                  className="hover:text-pink-400  transition-colors text-sm xl:text-base duration-200 font-medium whitespace-nowrap"
                >
                  About
                </a>
                <a
                  href="#solution"
                  className=" hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  Solution{" "}
                </a>
                <a
                  href="#e-stamp"
                  className=" hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  E-Stamp{" "}
                </a>
                <a
                  href="#ideabaaz"
                  className=" hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  Ideabaaz{" "}
                </a>
                <a
                  href="#Opportunities"
                  className=" hover:text-pink-400 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  Opportunities{" "}
                </a>
              </div>
            </div>
            {/* Desktop Sign Up Button */}
            <div className="hidden lg:block flex-shrink-0">
              <button className=" border bg-[#4DABE1]  text-white px-6 xl:px-10 py-4 rounded-full transition-all duration-200 font-medium text-sm xl:text-base">
                <a
                  href="#getintouch"
                  className="text-white  transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  Get in touch →{" "}
                </a>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-400 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? (
                <IoClose className="w-12 h-10 sm:w-5 sm:h-5 text-black" />
              ) : (
                <RxHamburgerMenu className="w-12 h-10 sm:w-5 sm:h-5 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a
              href="#about"
              className="block text-black hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              About
            </a>
            <a
              href="#solution"
              className="block text-black hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              Solution
            </a>
            <a
                  href="#e-stamp"
              className="block text-black hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              E-Stamp
            </a>
            <a
                  href="#ideabaaz"
              className="block text-black hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              Ideabaaz
            </a>
            <a
              href="#Opportunities"
              className="block text-black hover:text-pink-400 transition-colors duration-200 font-medium py-2 text-sm"
            >
              Opportunities
            </a>
            <div className="pt-4">
              <button className="w-full bg-[#4DABE1] text-white px-6 py-3 rounded-full hover:bg-[#3a9cc7] transition-all duration-200 font-medium text-sm">
                <a
                  href="#getintouch"
                  className="text-white transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                >
                  Get in touch →
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;