import { Spotlight } from "@/components/ui/spotlight-new";
import About from "@C/About";
import Home from "@C/Home";
import Skill from "@C/Skill";
import Work from "@C/Work";

export default function Index() {
  return (
    <div className=" ">
      <div className="lg:min-h-auto py-64 h-full w-full rounded-md flex md:items-center md:justify-center bg-[#0f0f11]/[1]  antialiased  bg-grid-white/[0.02]  relative overflow-hidden z-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-[#0f0f11] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(15, 75%, 50%, .08) 0, hsla(30, 75%, 50%, .02) 50%, hsla(45, 75%, 50%, 0) 80%)" />
        <Home />
      </div>

      <About />
      <Skill />
      <Work />


    </div>
  );
}
