"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Briefcase,
  MapPin,
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const BuiltOnce = () => {
  const cards = [
    {
      id: 1,
      icon: <Building2 className="w-9 h-auto  text-[#EF8032]" />,
      title: "Residential Communities",
      desc: "24×7 essential goods and fresh meals for apartment complexes and gated communities.",
    },
    {
      id: 2,
      icon: <GraduationCap className="w-9 h-auto text-[#EF8032]" />,
      title: "Campuses & Schools",
      desc: "Meals, snacks, and beverages available round-the-clock for students and staff.",
    },
    {
      id: 3,
      icon: <HeartPulse className="w-9 h-auto text-[#EF8032]" />,
      title: "Hospitals & Healthcare",
      desc: "Safe, contactless access to food, beverages, and hygiene essentials in sensitive environments.",
    },
    {
      id: 4,
      icon: <Briefcase className="w-9 h-auto text-[#EF8032]" />,
      title: "Corporate & Industrial Sites",
      desc: "Automated refreshment and meal solutions for offices, factories, and remote worksites.",
    },
    {
      id: 5,
      icon: <MapPin className="w-9 h-auto text-[#EF8032]" />,
      title: "Public Spaces & Transit",
      desc: "Hygiene and emergency essentials at airports, stations, highways, and high-traffic zones.",
    },
  ];

  return (
    <section className="bg-white section-width padding-top padding-bottom text-[#0A0F1A]">
      {/* Header */}
      <div className="text-center max-w-2xl 2xl:max-w-4xl mx-auto mb-10">
        <p className="tracking-widest header-text uppercase">
          BUILT ONCE. APPLIED EVERYWHERE{" "}
        </p>
        <h2 className="text-[#001744]">
          The same engineering platform powers diverse real-world environments
        </h2>
      </div>

      {/* Desktop Grid (unchanged) */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#E9F3FB] p-6 px-8 flex flex-col justify-between border-b-[6px] border-[#001744] hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              <div className="mb-6">{card.icon}</div>
              <h3 className="mb-4">{card.title}</h3>
              <p className="leading-relaxed text-[#001744]/90 max-w-[250px]">
                {card.desc}
              </p>
            </div>
            <button className="mt-10 flex items-center gap-2 text-[14px] font-medium text-[#EF8032] hover:underline">
              Know more about this
              <span className="text-[#EF8032] text-[16px]">→</span>
            </button>
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
          loopedSlides={cards.length}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="w-full builtonce-swiper"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="!bg-transparent pb-8">
              <div className="bg-[#E9F3FB]  min-h-[320px] sm:min-h-[330px] p-6 px-8 flex flex-col justify-between border-b-[6px] border-[#001744] hover:-translate-y-1 transition-transform duration-300">
                <div className="text-center sm:text-start">
                  <div className="mb-6 flex justify-center sm:justify-start">
                    {card.icon}
                  </div>
                  <h3 className="mb-4">{card.title}</h3>
                  <p className="leading-relaxed text-[#001744]/90 max-w-[250px] mx-auto sm:mx-0">
                    {card.desc}
                  </p>
                </div>
                <button className="mt-10 flex items-center justify-center sm:justify-start gap-2 text-[14px] font-medium text-[#EF8032] hover:underline">
                  Know more about this
                  <span className="text-[#EF8032] text-[16px]">→</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Styling */}
        <style jsx global>{`
          .builtonce-swiper .swiper-pagination {
            position: static !important;
            text-align: center;
          }
          .builtonce-swiper .swiper-pagination-bullet {
            background: #1281ff !important;
            opacity: 0.6;
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
          }
          .builtonce-swiper .swiper-pagination-bullet-active {
            background: #00208d !important;
            opacity: 1;
          }
        `}</style>
      </div>

      {/* Footer Banner (unchanged) */}
      <div className="mt-6 md:mt-16 text-center w-fit mx-auto bg-[#E5F1FA] py-5 px-10 rounded-xl">
        <p className="text-base md:text-lg lg:text-2xl font-medium text-[#001744]">
          Wherever people live, work, or travel - VendiBite enables access.{" "}
        </p>
      </div>
    </section>
  );
};

export default BuiltOnce;
