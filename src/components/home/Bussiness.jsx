"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Bussiness = () => {
  const features = [
    {
      id: 1,
      title: "Packed Snacks and Beverages",
      desc: "Seamlessly vend snacks, drinks, and ready-to-eat items at ambient or chilled temperatures.",
      image: "/images/bussiness/b1.jpeg",
    },
    {
      id: 2,
      title: "Chaat Street Food",
      desc: "Serve authentic Indian street food flavors through fully automated, touch-free vending systems.",
      image: "/images/bussiness/b2.jpeg",
    },
    {
      id: 3,
      title: "Hot & Cold Beverages",
      desc: "Deliver freshly brewed coffee, tea, and chilled refreshing beverages through self-service machines.",
      image: "/images/bussiness/b3.jpeg",
    },
    {
      id: 4,
      title: "Hot Fried Food",
      desc: "Fry and serve snacks instantly with smart, touchless vending units built for safety and consistency.",
      image: "/images/bussiness/b4.jpeg",
    },
  ];

  return (
    <section className="section-width padding-top padding-bottom text-[#0A0F1A]">
      {/* Header */}
      <div className="text-center max-w-lg mx-auto mb-10">
        <p className="tracking-widest header-text uppercase">BUILT FOR BUSINESS.</p>
        <h2 className="text-[#001744]">
          Expand faster with proven vending opportunities.
        </h2>
      </div>

      {/* Desktop Grid (lg and above) */}
      <div className="hidden lg:flex flex-row lg:gap-6 xl:gap-10 justify-center items-stretch">
  {features.map((feature) => (
    <div
      key={feature.id}
      className="flex flex-col bg-[#E5F1FA] min-h-[350px]  text-start  overflow-hidden w-full max-w-[260px] h-full"
    >
      <div className="relative w-full overflow-hidden group">
        <Image
          src={feature.image}
          alt={feature.title}
          width={1000}
          height={1000}
          className="w-full lg:h-[100px] xl:h-[180px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* make this part fill remaining height */}
      <div className="flex flex-col justify-between px-4 pt-8 pb-4 flex-grow">
        <div>
          <h3 className="text-[#001744] text-base font-medium">
            {feature.title}
          </h3>
          <p className="mt-4 text-xs text-[#001744] leading-snug">
            {feature.desc}
          </p>
        </div>
        <button className="mt-6 border-t w-full pt-2 flex items-center gap-2 text-[14px] font-medium text-[#EF8032]">
          Learn More
        </button>
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
          className="w-full business-swiper"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id} className="!bg-transparent pb-8 ">
              <div className="flex bg-[#E5F1FA] flex-col text-center items-center lg:items-start lg:text-start  overflow-hidden">
                <div className="relative w-full overflow-hidden group">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1000}
                    height={1000}
                    className="w-full h-[180px] object-cover object-top"
                  />
                </div>
                <div className="px-4 flex w-full  flex-col items-center justify-center text- pt-8 pb-4">
                  <h3 className="text-[#001744] text-base font-medium">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-xs text-[#001744] max-w-[220px] leading-snug">
                    {feature.desc}
                  </p>
                  <button className="mt-6 border-t w-full pt-2 flex justify-center lg:justify-start text-center items-center gap-2 text-[14px] font-medium text-[#EF8032]">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Styling — matches “TheProblem” style */}
        <style jsx global>{`
          .business-swiper .swiper-pagination {
            position: static !important;
            text-align: center;
          }
          .business-swiper .swiper-pagination-bullet {
            background: #1281ff !important;
            opacity: 0.6;
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
          }
          .business-swiper .swiper-pagination-bullet-active {
            background: #00208d !important;
            opacity: 1;
          }
        `}</style>
      </div>

      {/* Footer Banner */}
      <div className="mt-6 md:mt-10 w-full flex justify-center">
        <button className="bg-[#BEFF4E] hover:bg-[#CFFF2C] transition-colors duration-300 text-[#001744] text-[14px] font-semibold px-6 py-3 w-fit rounded-sm">
          Browse All Products
        </button>
      </div>
    </section>
  );
};

export default Bussiness;
