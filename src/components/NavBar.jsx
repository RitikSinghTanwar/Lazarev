import React, { useEffect } from "react";
import { FaPencil } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function NavBar(){

    useGSAP(()=>{
        gsap.from(".Nav",{
            y:-150,
            duration:1.5
        })
    })

    return (
        <div className="Nav w-[87vw] mx-auto py-[1.5vw] flex items-center justify-between border-b-[.01vw] border-zinc-600">
            <div className="Nav_left text-[2vw] font-bold uppercase tracking-wider">Lazarev.</div>
            <div className="Nav_mid flex gap-[2vw]">
                {["casestudies","areaofexpertise","uiuxdesign","productdesign","designprocess","aboutagency"].map((item,index)=>{
                    return <a key={index} href="" className="hover:text-zinc-500 uppercase text-[.9vw] font-medium">{item}</a>
                })}
            </div>
            <div className="Nav_right hover:scale-105 hover:bg-green-700 transition-all ease-linear duration-200 cursor-pointer overflow-hidden px-[1.2vw] py-[.8vw] bg-green-600 rounded-full flex items-center gap-[1vw]">
                <div className="btn_title text-[1vw] uppercase font-medium">Let's Talk</div>
                <FaPencil className="text text-[1vw]"/>
            </div>
        </div>
    )
}

export default NavBar;