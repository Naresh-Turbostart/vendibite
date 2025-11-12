"use client";
import Image from "next/image";

const MadeInIndia = () => {
  return (
    <section className="bg-[#E5F1FA] text-[#001744] padding-top padding-bottom ">
      <div className="section-width">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className=" tracking-widest header-text  uppercase">
MADE IN INDIA. DESIGNED FOR THE WORLD          </p>
          <h2 className="  ">
          30,000 sq ft manufacturing facility 
in Pune, India
          </h2>
         
        </div>

        {/* Content Grid */}
        <div className="flex w-full justify-between flex-col lg:flex-row items-center gap-10 mb-10 md:mb-16 md:px-10">
          {/* Left Column */}
          <div className="flex flex-col md:gap-6">
            {/* Tags */}
            <div className="flex  gap-3">
              <span className="border border-[#001744] header-text text-[#001744] text-[8px] font-medium px-1 sm:px-3 py-[2px]  tracking-wide">
                ENGINEERED IN INDIA
              </span>
              <span className="border border-[#001744] header-text text-[#001744] text-[8px] font-medium px-1 sm:px-3 py-[2px] rounded-sm tracking-wide">
                OEM MANUFACTURING
              </span>
              <span className="border border-[#001744] header-text text-[#001744] text-[8px] font-medium px-1 sm:px-3 py-[2px] rounded-sm tracking-wide">
                GLOBAL QUALITY
              </span>
            </div>

            {/* Description */}
            <h3 className="text-xl md:text-2xl font-medium leading-snug text-[#001744] max-w-[550px]">
              From CAD design to final <br /> assembly, every <br /> component is built for <br />
              longevity.
            </h3>

            {/* CTA Button */}
            <button className="bg-[#BEFF4E] mt-6 hover:bg-[#CFFF2C] transition-colors duration-300 text-[#001744] text-[14px] font-semibold px-4 py-2 md:px-6 md:py-3 w-fit rounded-sm">
              Read More
            </button>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className=" flex justify-center  lg:justify-end">
            <div className="w-full max-w-[600px] h-[200px] md:h-[340px] bg-[#CCCCCC]  overflow-hidden">
              <Image
                src="/images/madeInIndia/machine.jpeg" 
                alt="Manufacturing Facility"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-[#001744]/20 pt-10 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <div>
            <h3 className=" text-2xl md:text-3xl font-medium mb-1">90%</h3>
            <p className="text-[10px] font-medium text-[#001744]">
              In-house fabrication
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium mb-1">ISO</h3>
            <p className="text-[10px] font-medium text-[#001744]">
              Grade QA processes
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium mb-1">Rapid</h3>
            <p className="text-[10px] font-medium text-[#001744]">
              Prototyping to production
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium mb-1">99%</h3>
            <p className="text-[10px] font-medium text-[#001744]">
              Uptime across deployments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeInIndia;
