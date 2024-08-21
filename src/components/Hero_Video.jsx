import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Hero_Video(){

    const circleMove = ()=>{
        document.querySelector(".video").addEventListener("mousemove",function(dets){
            gsap.to(".circle",{
                x:dets.x-700,
                y:dets.y-500
            })
        })
    }

    const videoHandler = ()=>{
        var count = 0;
        document.querySelector(".circle").addEventListener("click",function(){
            if(count%2==0){
                document.querySelector("video").play();
            }
            else{
                document.querySelector("video").pause();
           }
           count++;        
        })
    }

    useEffect(()=>{
       circleMove();
       videoHandler();
    },[])

    return (
        <div className="main relative mt-[5vw] w-[87vw] mx-auto rounded-2xl overflow-hidden h-[43vw] flex items-center justify-center">
            <div className="video w-full h-full">
                <video className="w-full h-full object-cover" src="src\assets\Hero_Section_Video.mp4" loop muted autoPlay></video>
            </div>
            <div className="circle cursor-pointer transition-all ease-linear duration-150 absolute z-[999] top-[50%] -translate-y-[50%] video_btn bg-zinc-100 bg-opacity-70 w-[10vw] h-[10vw] flex items-center justify-center rounded-full">
                <FaPlay className="text-[2vw]"/>
            </div>
        </div>
    )
}

export default Hero_Video;