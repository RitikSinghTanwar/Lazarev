import React from "react";
import About_Cards from "./About_Cards";
import { MdArrowOutward } from "react-icons/md";
function About(){

    return (
        <div className="w-full min-h-screen bg-zinc-950 pb-[5vw]">
            <div className="w-[87vw] h-full mx-auto">
                <h1 className="text-[2.5vw] pt-[5vw] w-[90%] leading-10">Whether you're an AI startup aiming for Series D or an established brand seeking a digital transformation, our awards-winning team will take your user-experience to the next level.</h1>
                <div className="mt-[5vw] w-full h-full flex flex-wrap items-start justify-center gap-5">
                    <About_Cards/>
                </div>
            </div>
            <div className="w-[75vw] mt-[4vw] py-[1vw] mx-auto gap-[1vw] rounded-full flex items-center justify-center bg-green-600 hover:scale-75 hover:gap-[60vw] transition-all ease-linear duration-500 cursor-pointer hover:bg-blue-600">
                <div className="text-[1.2vw] uppercase font-semibold">all outcomes</div>
                <MdArrowOutward className="text-[1.3vw]"/>
            </div>
        </div>
    )
}

export default About;