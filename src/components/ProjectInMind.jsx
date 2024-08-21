import React from "react";
import { MdArrowOutward } from "react-icons/md";
function ProjectInMind() {
  return (
    <div className="relative w-full h-[40vw] bg-zinc-950 overflow-hidden">
      <div className="Image h-full w-full" data-scroll data-scroll-speed="-.5">
        <img
          className="h-full w-full object-cover"
          src="https://4kwallpapers.com/images/walls/thumbs_3t/8949.jpeg"
          alt=""
        />
      </div>
      <div className="p-5 textOver absolute w-full h-full flex items-start justify-between top-0">
        <div className="uppercase text-[9vw] w-[65%] font-bold leading-none tracking-tight">Have a project in mind?</div>
        <div className="flex flex-col justify-end items-end gap-[20vw]">
            <div className="logo">
            <MdArrowOutward className="text-[10vw]"/>
            </div>
            <div className="text-[1.2vw] w-[50%]">Share your project idea with us!Should the partnership vibe not align,we're glad to furnish you with valuable insights that could prove beneficial</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInMind;
