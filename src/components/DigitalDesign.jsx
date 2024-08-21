import React from "react";
import { MdArrowOutward } from "react-icons/md";
function DigitalDesign(){

    return (
        <div className="w-full min-h-screen bg-white text-black flex flex-col">
            <div className="Main_text pt-[10vw] text-black text-center text-[6vw] w-[50%] mx-auto leading-none font-bold">Digital Product Design Process</div>
            <div className="w-[87vw] mt-[5vw] border-b-2 pb-5 mx-auto h-full relative flex items-start justify-start gap-[4.3vw]">
                <div className="button sticky top-0 bottom-0 uppercase px-[3vw] py-[1.3vw] bg-blue-600 rounded-full text-white font-semibold tracking-tighter flex items-center gap-2">
                <div className="text-[1vw]">discover our process</div>
                <MdArrowOutward className="text-[1.5vw]"/>
                </div>
                <div className="flex flex-col items-center justify-between gap-[5vw] w-[55%] text-zinc-600">
                    <div className="text-[1.8vw] leading-none">We do not take on projects that involve blind conformity or designing out of context. We won't settle for a user interface design that is misaligned with your product and digital strategy. Neither will we launch web development ventures without user testing to validate our design solutions.</div>
                    <div className="text-[1.8vw] leading-none">Instead, we create scalable digital products that meet the ever-evolving demands of our customers, ensuring long-term sustainability.</div>
                </div>
            </div>
        </div>
    )
}

export default DigitalDesign;