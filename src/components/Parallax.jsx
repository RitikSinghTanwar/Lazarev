import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { MdArrowOutward } from "react-icons/md";

function Parallax() {
  const scroll = new LocomotiveScroll();

  return (
    <div className="Parallax w-full h-screen bg-zinc-950 mt-[10vw] overflow-hidden">
      <div data-scroll data-scroll-speed="0" className="relative Image h-full w-full">
        <img data-scroll data-scroll-speed="-.5"  className="relative brightness-75 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1723101173511-7ab3da8354bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute opacity-0 hover:opacity-100 scale:0 hover:scale-100 transition-all ease-linear duration-200 top-[0%] w-full h-full flex flex-col items-center justify-center">
            <div className="Main_text text-[5.5vw] font-bold leading-none mb-[2vw]">
                Golden Standart In UX + AI
            </div>
            <div className="para text-[1.5vw] w-[68%] text-center mb-[2vw]">Looks we've been designing AI experiences since 2017,and we're not just dabbling in it; We've tackled Adtech,Salestech,Fintech,Legaltech,Media-You name it.<div></div></div>
            <div className="text-[1.5vw]">Want to see how we do it?</div>
            <div className="button mt-[3vw] rounded-full flex items-center gap-[1vw] bg-zinc-200 text-black px-[2.5vw] py-[1vw]">
                <div className="text-[1.3vw]">check out ux+AI Innovation here</div>
                <MdArrowOutward className="text-[1.5vw]"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
