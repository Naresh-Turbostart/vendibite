"use client";
import { ShieldCheck, Cpu, BarChart3 } from "lucide-react";

const Intelligence = () => {
  const cards = [
    {
      id: 1,
      title: "Reliable Performance",
      desc: "99% uptime through robust mechanical design and temperature control.",
      icon: <ShieldCheck className="w-10 h-auto  text-[#B6FF00]" />,
    },
    {
      id: 2,
      title: "Connected Systems",
      desc: "IoT-ready dashboards for inventory, transactions, and remote monitoring.",
      icon: <Cpu className="w-10 h-auto text-[#B6FF00]" />,
    },
    {
      id: 3,
      title: "Scalable Deployment",
      desc: "From a single kiosk to nationwide networks with unified analytics.",
      icon: <BarChart3 className="w-10 h-auto text-[#B6FF00]" />,
    },
  ];

  return (
    <section className="bg-[#001744] text-white padding-top padding-bottom ">
      <div className="section-width">
        {/* Header */}
        <div className="text-center max-w-3xl 2xl:max-w-5xl mx-auto mb-10">
          <p className=" tracking-widest header-text  uppercase">
            ENGINEERING MEETS INTELLIGENCE{" "}
          </p>
          <h2 className="  ">
            Every VendiBite system combines industrial grade build quality with
            embedded intelligence{" "}
          </h2>
          <p className="mt-4    leading-relaxed">
            Our platform is product-agnostic, allowing clients to deploy
            anything from packaged food to fresh protein shakes to makeup
            through the same core technology.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="max-w-6xl mx-auto  border border-[#293C62] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#293C62]">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`flex flex-col items-center  text-center px-8 py-8 md:py-16 ${
                  index !== cards.length - 1
                    ? "border-b md:border-b-0 md:border-r-[4px] border-[#293C62]"
                    : ""
                }`}
              >
                <div className="mb-5">{card.icon}</div>
                <h3 className="text-xl max-w-[200px] lg:text-2xl font-medium tracking-normal mb-3 md:mb-6">
                  {card.title}
                </h3>
                <div className="w-16 h-[1px] md:h-[2px] bg-[#293C62] mb-3 md:mb-6" />
                <p className=" text-white leading-relaxed  max-w-[250px] md:max-w-[220px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <h3 className="py-6 text-center px-4 text-white   bg-gradient-to-r from-[#172D56] to-[#021946]">
            “Others sell machines. We sell access and reliability.”
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
