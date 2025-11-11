"use client";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Briefcase,
  MapPin,
} from "lucide-react";

const BuiltOnce = () => {
  const cards = [
    {
      id: 1,
      icon: <Building2 className="w-6 h-6 text-[#B73601]" />,
      title: "Residential Communities",
      desc: "24×7 essential goods and fresh meals for apartment complexes and gated communities.",
    },
    {
      id: 2,
      icon: <GraduationCap className="w-6 h-6 text-[#B73601]" />,
      title: "Campuses & Schools",
      desc: "Meals, snacks, and beverages available round-the-clock for students and staff.",
    },
    {
      id: 3,
      icon: <HeartPulse className="w-6 h-6 text-[#B73601]" />,
      title: "Hospitals & Healthcare",
      desc: "Safe, contactless access to food, beverages, and hygiene essentials in sensitive environments.",
    },
    {
      id: 4,
      icon: <Briefcase className="w-6 h-6 text-[#B73601]" />,
      title: "Corporate & Industrial Sites",
      desc: "Automated refreshment and meal solutions for offices, factories, and remote worksites.",
    },
    {
      id: 5,
      icon: <MapPin className="w-6 h-6 text-[#B73601]" />,
      title: "Public Spaces & Transit",
      desc: "Hygiene and emergency essentials at airports, stations, highways, and high-traffic zones.",
    },
  ];

  return (
    <section className="bg-white section-width padding-top padding-bottom text-[#0A0F1A]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className=" tracking-widest header-text  uppercase mb-4">
          We Build What Others Operate
        </p>
        <h2 className="  text-[#001744] ">
          VendiBite builds the machines behind <br /> unmanned retail
        </h2>
       
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#E9F3FB] rounded-md p-6 flex flex-col justify-between border-b-[4px] border-[#001744] hover:-translate-y-1 transition-transform duration-300"
          >
            <div>
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-[18px] font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#001744]/90">
                {card.desc}
              </p>
            </div>
            <button className="mt-6 flex items-center gap-2 text-[14px] font-medium text-[#B73601] hover:underline">
              Know more about this
              <span className="text-[#B73601] text-[16px]">→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="mt-20 text-center bg-[#E5F1FA] py-6 px-6 md:px-12 rounded-xl max-w-4xl mx-auto">
        <p className="text-[18px] md:text-[20px] font-medium text-[#001744]">
          Wherever people live, work, or travel — VendiBite enables access.
        </p>
      </div>
    </section>
  );
};

export default BuiltOnce;
