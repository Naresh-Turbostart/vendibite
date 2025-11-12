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
        <div className="flex items-center justify-between h-24   ">
          {/* Logo and Navigation Links Container */}
          <div className="flex items-center min-w-0 flex-1">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/layout/logo.png"
                alt="Left Dashboard"
                width={1000}
                height={1000}
                className="w-[120px] sm:w-[120px] sm:h-[40px] lg:w-[150px] lg:h-[70px] object-contain   flex-shrink-0"
              />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:block ">
              <div className="flex text-white cursor-pointer items-baseline space-x-6 xl:space-x-14">
                <a
                  href="#about"
                  className="hover:text-[#FF8730]  transition-colors text-sm xl:text-base duration-200  whitespace-nowrap"
                >
                  Home
                </a>
                <a
                  href="#solution"
                  className=" hover:text-[#FF8730] transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                >
                  About{" "}
                </a>
                <a
                  href="#e-stamp"
                  className=" hover:text-[#FF8730] transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                >
                  Tech{" "}
                </a>
                <a
                  href="#ideabaaz"
                  className=" hover:text-[#FF8730] transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                >
                  Applications{" "}
                </a>
                <a
                  href="#Opportunities"
                  className=" hover:text-[#FF8730] transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                >
                  Manufacturing{" "}
                </a>
                <a
                  href="#Opportunities"
                  className=" hover:text-[#FF8730] transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                >
                  Partners{" "}
                </a>
              </div>
            </div>
            {/* Desktop Sign Up Button */}
            <div className="hidden lg:block flex-shrink-0">
              <button className="  bg-[#BEFF4E]  text-black px-6 xl:px-10 py-3 font-semibold transition-all duration-200  text-sm xl:text-base">
                <a
                  href="#getintouch"
                  className="  transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                >
Watch the Feature                </a>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#FF8730] transition-colors duration-200 p-2"
            >
              {isMenuOpen ? (
                <IoClose className="w-12 h-10 sm:w-5 sm:h-5 text-white" />
              ) : (
                <RxHamburgerMenu className="w-12 h-10 sm:w-5 sm:h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0c0b2a] border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a
              href="#about"
              className="block text-white hover:text-[#FF8730] transition-colors duration-200  py-2 text-sm"
            >
              Home
            </a>
            <a
              href="#solution"
              className="block text-white hover:text-[#FF8730] transition-colors duration-200  py-2 text-sm"
            >
              About
            </a>
            <a
                  href="#e-stamp"
              className="block text-white hover:text-[#FF8730] transition-colors duration-200  py-2 text-sm"
            >
              Tech
            </a>
            <a
                  href="#ideabaaz"
              className="block text-white hover:text-[#FF8730] transition-colors duration-200  py-2 text-sm"
            >
              Application
            </a>
            <a
              href="#Opportunities"
              className="block text-white hover:text-[#FF8730] transition-colors duration-200  py-2 text-sm"
            >
              Manufacturing
            </a>
            <a
              href="#Opportunities"
              className="block text-white hover:text-[#FF8730] transition-colors duration-200  py-2 text-sm"
            >
              Partners
            </a>
            <div className="pt-4">
              <button className="  bg-[#BEFF4E]  w-full text-black px-6 xl:px-10 py-3 font-semibold transition-all duration-200  text-sm xl:text-base">
                <a
                  href="#getintouch"
                  className="  transition-colors duration-200  text-sm xl:text-base whitespace-nowrap"
                >
Watch the Feature                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;