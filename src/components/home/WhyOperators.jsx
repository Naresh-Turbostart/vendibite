"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WhyOperators = () => {
  const features = [
    {
      id: 1,
      title: "Design & Engineering",
      desc: "End-to-end mechanical, electrical, and software development.",
      image: "/images/operators/w3.jpeg",
    },
    {
      id: 2,
      title: "Smart Manufacturing",
      desc: "Precision fabrication, assembly, and testing under one roof.",
      image: "/images/operators/w1.jpeg",
    },
    {
      id: 3,
      title: "IoT Integration",
      desc: "Real-time telemetry, payment systems, and uptime diagnostics.",
      image: "/images/operators/w2.jpeg",
    },
  ];

  return (
    <section className="section-width padding-top padding-bottom text-[#0A0F1A]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="tracking-widest header-text uppercase">
          WHY OPERATORS CHOOSE VENDIBITE
        </p>
        <h2 className="text-[#001744]">
          We give you the freedom to focus on your business — not the machine
        </h2>
      </div>

      {/* Desktop Grid (lg and above) */}
      <div className="hidden lg:flex flex-row gap-10 justify-center items-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex bg-[#E5F1FA] min-h-[350px] xl:min-h-0 flex-col items-start text-start overflow-hidden"
          >
            <div className="relative w-full overflow-hidden group">
              <Image
                src={feature.image}
                alt={feature.title}
                width={1000}
                height={1000}
                className="w-full h-[180px] object-cover object-right transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="px-6 py-8">
              <h3 className="text-[#001744] text-base font-medium">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm text-[#001744] max-w-[220px] leading-snug">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper for Mobile + Medium Screens */}
      <div className="lg:hidden mt-6 px-10 sm:px-0 w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="w-full operator-swiper"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id} className="!bg-transparent pb-8">
              <div className="flex bg-[#E5F1FA] flex-col items-start text-start  overflow-hidden">
                <div className="relative w-full overflow-hidden group">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    className="w-full h-[150px] md:h-[180px] object-cover object-right"
                  />
                </div>
                <div className="px-6 py-8 text-center">
                  <h3 className="text-[#001744] text-base font-medium">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm text-[#001744] max-w-[220px] leading-snug">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Styling — Same as TheProblem */}
        <style jsx global>{`
          .operator-swiper .swiper-pagination {
            position: static !important;
          
            text-align: center;
          }
          .operator-swiper .swiper-pagination-bullet {
            background: #1281ff !important;
            opacity: 0.6;
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
          }
          .operator-swiper .swiper-pagination-bullet-active {
            background: #00208d !important;
            opacity: 1;
          }
        `}</style>
      </div>

      {/* Footer Button */}
      <div className=" mt-6 md:mt-10 w-full flex justify-center">
        <button className="bg-[#BEFF4E] hover:bg-[#CFFF2C] transition-colors duration-300 text-[#001744] text-[14px] font-semibold px-6 py-3 w-fit rounded-sm">
          Read More
        </button>
      </div>

      {/* Tagline */}
      <div className=" mt-6 md:mt-14 text-center w-fit mx-auto bg-[#E5F1FA] py-5 px-10 rounded-xl">
        <p className="text-base md:text-lg lg:text-2xl font-medium text-[#001744]">
          We build. You operate.
        </p>
      </div>
    </section>
  );
};

export default WhyOperators;
