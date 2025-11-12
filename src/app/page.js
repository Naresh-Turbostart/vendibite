
import BuiltOnce from "@/components/home/BuiltOnce";
import Bussiness from "@/components/home/Bussiness";
import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import Intelligence from "@/components/home/Intelligence";
import MadeInIndia from "@/components/home/MadeInIndia";
import WeBuild from "@/components/home/WeBuild";
import WhyOperators from "@/components/home/WhyOperators";
export default function Home() {
  return (
    <div>
      <Hero/>
      <WeBuild/>
      <Intelligence/>
      <Bussiness/>
      <BuiltOnce/>
      <MadeInIndia/>
      <WhyOperators/>
      <Cta/>
    </div>
  );
}
