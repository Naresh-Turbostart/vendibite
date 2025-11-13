"use client";
// import routes from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <>
      <div className="w-full border-t-[2px] border-[#293D4C] footer-gradient">
        <div className="section-width   border-b border-[#ffffff10]"></div>
        <div className="section-width pt-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
            {/* Left side - Logo, text and button */}
            <div className="max-w-64 ">
              <div className=" ml-[-20px] pl-8 sm:flex flex-col sm:justify-center sm:items-start">
                <Image
                  src={"/images/layout/logo.png"}
                  className="xl:h-14 md:h-12 h-10 mb-4 w-auto "
                  width={150}
                  height={100}
                  alt="logo"
                />
                <p className="text-white mb-3 text-xs xl:text-xs leading-6">
                  VendiBite is India's leading smart vending machine
                  manufacturer—combining innovation, technology, and reliability
                  to make automated retail effortless. Est. 2015, we've
                  installed 141+ machines across 71+ cities, powering the future
                  of automated retail.{" "}
                </p>
                {/* <Link
                  href=""
                  className="relative inline-block px-8 py-2 rounded-full font-semibold text-white bg-[#46F245] shadow-[0_3px_20px_rgba(70,242,69,0.4)]"
                  style={{ textShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)" }}
                >
                  <span className="relative z-10">Get Started</span>
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
                    }}
                  />
                </Link> */}
              </div>
            </div>

            {/* Right side - Navigation links */}
            <div className="pl-4 grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16 xl:gap-20 lg:justify-end">
              <div>
                <p className="mb-4 text-white text-base font-medium">
                  Quick Links
                </p>
                <div className="space-y-1 font-light">
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      About
                    </Link>
                  </p>
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Product
                    </Link>
                  </p>
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Industries
                    </Link>
                  </p>
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Blog
                    </Link>
                  </p>
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Contact
                    </Link>
                  </p>
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Case Studies
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-4 text-white text-base font-medium">
                  Conatct Us{" "}
                </p>
                <div className="space-y-1 font-light">
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Phone: +91-98765-43210{" "}
                    </Link>
                  </p>
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Email: info@vendibite.com{" "}
                    </Link>
                  </p>
                  <p className="text-xs  text-white ">
                    <Link
                      href=""
                      className="hover:text-[#FF8730] transition-colors"
                    >
                      Location: Hyderabad, India{" "}
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-4 text-white text-base font-medium">
                  Follow Us{" "}
                </p>
                <div className="space-x-1 flex font-light">
                  <a
                    href="https://www.linkedin.com/company/rapidosmart-automatics-pvt-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/layout/link.png"
                      width={30}
                      height={30}
                      alt="LinkedIn"
                      unoptimized
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/vendibite/?igshid=ZDdkNTZiNTM%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                src="/images/layout/insta.png"
                width={30}
                height={30}
                alt="insta"
                unoptimized
              />
                  </a>
                  <a
                    href="https://www.facebook.com/people/VendiBite/100063943066238/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                src="/images/layout/face.png"
                width={30}
                height={30}
                alt="facebook"
                unoptimized
              />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCmBjdUeFH4RPPVUajh6355w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                src="/images/layout/utube.png"
                width={30}
                height={30}
                alt="utube"
                unoptimized
              />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-width mt-8 pb-4 border-t border-[#344568]"></div>
        <div className="section-width flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center p-4 text-xs text-[#A1A1AA]">
          <div className="flex gap-4">
            <span className="text-center">
              © 2025 VendiBite. All rights reserved.
            </span>
            {/* <a
                  href=""
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a> */}
          </div>

          <div className="flex gap-4 items-center">
            {/* <span className="text-white align-middle">Follow Us</span> */}

            <a
              href="https://www.linkedin.com/company/climaty-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {/* <Image
                src="/images/footer/linkedin.svg"
                width={30}
                height={30}
                alt="LinkedIn"
                unoptimized
              /> */}
              Privacy Policy
            </a>

            <a
              href="https://www.youtube.com/channel/UCuHP3Cfq9DSoAf-vJ9A_uPw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {/* <Image
                src="/images/footer/youtube.svg"
                width={30}
                height={30}
                alt="YouTube"
                unoptimized
              /> */}
              Terms of Service
            </a>

            {/* <a
              href="https://x.com/ClimatyAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/footer/twitter.svg"
                width={30}
                height={30}
                alt="Twitter"
                unoptimized
              />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
