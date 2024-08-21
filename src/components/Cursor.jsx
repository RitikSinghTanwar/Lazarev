import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Cursor(){

    useEffect(()=>{
            document.addEventListener("mousemove",function(dets){
                gsap.to(".cursor",{
                    x:dets.x,
                    y:dets.y
                })
            })
    },[])

    return (
        <div className="cursor w-[3vw] h-[3vw] bg-white rounded-full fixed z-[9999999] mix-blend-difference"></div>
    )
}

export default Cursor;