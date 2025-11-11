"use client";
import Image from "next/image";
import { Wrench, Factory, Wifi, Settings } from "lucide-react"; // Optional icon placeholders

const WeBuild = () => {
  const features = [
    {
      id: 1,
      title: "Design & Engineering",
      desc: "End-to-end mechanical, electrical, and software development.",
      image: "/images/build/i1.jpeg",
    //   icon: <Wrench className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Smart Manufacturing",
      desc: "Precision fabrication, assembly, and testing under one roof.",
      image: "/images/build/i2.jpeg",
    //   icon: <Factory className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "IoT Integration",
      desc: "Real-time telemetry, payment systems, and uptime diagnostics.",
      image: "/images/build/i3.jpeg",
    //   icon: <Wifi className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Customization",
      desc: "Modular architecture adaptable to any category or brand.",
      image: "/images/build/i4.jpeg",
    //   icon: <Settings className="w-5 h-5" />,
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
        <p className="mt-4   text-[#001744] leading-relaxed">
          We design and manufacture smart vending and kiosk systems that let our
          partners run 24×7 access points for food, essentials, and beyond. Every
          VendiBite unit is built for reliability — designed in-house, tested for
          real-world use, and ready to deploy anywhere.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-start text-start">
            <div className="relative w-full max-w-[260px] overflow-hidden group">
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-[220px] object-conatin  transition-transform duration-300 group-hover:scale-105"
              />
           
            </div>

            <h3 className="mt-4  text-base font-normal tracking-normal  text-[#001744]">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm text-[#001744] max-w-[220px] leading-snug">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="mt-16 text-center w-fit mx-auto bg-[#E5F1FA] py-5 px-10 rounded-xl">
        <p className="text-xl md:text-2xl font-medium text-[#001744]">
          We manufacture the machines that make 24×7 access possible.
        </p>
      </div>
    </section>
  );
};

export default WeBuild;
