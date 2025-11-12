"use client";
import { ShieldCheck, Cpu, BarChart3,FileText } from "lucide-react";
import Link from "next/link";

const Cta = () => {
  

  return (
    <section className="bg-[#001744] text-white padding-top padding-bottom ">
      <div className="section-width">
        {/* Header */}
        <div className="text-center max-w-4xl 2xl:max-w-6xl mx-auto ">
          <p className=" tracking-widest header-text  uppercase ">
LET'S BUILD WHAT'S NEXT          </p>
          <h2 className="  ">
           Whether you're a brand, an operator, or a facilities company , if you're looking to power unmanned access, we'll engineer the machines behind it
          </h2>
        

            {/* Buttons */}
            <div className="mt-12 w-full justify-center flex flex-wrap items-center gap-4">
              {/* Watch Feature Button */}
              <Link
                href="https://www.zee5.com/tv-shows/details/ideabaaz/0-6-4z5840913"
                target="_blank"
                className="flex items-center justify-center gap-2  bg-[#BEFF4E] px-6 py-3 text-sm font-semibold text-[#0A0F1A] transition hover:bg-[#d5ff5e]"
              >
                
                 Talk to Sales
              </Link>

              {/* Applications Button */}
              <Link
                href="#applications"
                className="flex items-center justify-center gap-2 border border-[#BEFF4E] px-6 py-3 text-sm font-semibold text-[#BEFF4E] transition hover:bg-[#B6FF00]/10"
              >
                                <FileText className="w-4 h-auto text-[#B6FF00]" />

                Request a Specification Sheet

              </Link>
            </div>

        </div>


       
         
        </div>
    </section>
  );
};

export default Cta;
