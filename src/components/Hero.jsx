import React from "react";
import Green_btn from "./Green_btn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero(){

    useGSAP(()=>{
        gsap.from(".main .hero_top,.main .hero_mid,.main .hero_btm",{
            y:500,
            duration:1.5,
            stagger:.2
        })
    })

    return(
        <div className="main w-[87vw] mx-auto flex flex-col items-center justify-center pt-[4vw] overflow-hidden">
            <div className="hero_top flex items-center gap-1 ">
                <h3 className="text-[1.2vw]">Digital Product Desing Agency</h3>
                <h4 className="text-[1.2vw] font-bold text-zinc-100">/</h4>
                <h4 className="text-[1.2vw] font-bold text-zinc-500">/</h4>
                <h4 className="text-[1.2vw] font-bold text-zinc-600">/</h4>
                <h3 className="text-[1.2vw]">San Francisco</h3>
            </div>
            <div className="relative hero_mid text-[6vw] w-[80%] text-center font-bold tracking-tight leading-none mb-[2vw] mt-[1.5vw] flex flex-wrap items-center justify-center gap-[1vw]">
                <div className="one hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200">UX-First</div>
                <div className="two hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200">Desing</div>
                <div className="three hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200">Agency</div>
                <div className="four hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200">for</div>
                <div className="five hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200">B2B</div>
                <div className="six hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200 hover:rotate-45">+</div>
                <div className="seven hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200">AI</div>
                <div className="eight hover:scale-105 hover:text-green-500 select-none transition-all ease-linear duration-200">Companies</div>
            </div>
            <div className="hero_btm flex items-center gap-[.5vw] text-[1.2vw]">
                We launch
                <Green_btn title={"MVPs"}/>
                redefine
                <Green_btn title={"existing products"}/>
                & continously dive into 
                <Green_btn title={"customer development"}/>
            </div>
        </div>
    )
}

export default Hero;