import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import Portfolio_btn from "./Portfolio_btn";
import video1 from "../assets/Hero_Section_Video.mp4"
import video2 from "../assets/pika-cover-big-s.mp4"
import video3 from "../assets/accern-rhea-cover-big.mp4"
import video4 from "../assets/boel-it-cover-big-s.mp4"
import video5 from "../assets/collectocrypt-cover-big.mp4"
import video6 from "../assets/blockbeat-cover-big-s.mp4"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Portfolio(){

    const portfolioData = [
        {title:"AI",desc:"Using advanced AI, we'll design intuitive solutions that streamline operations and elevate user experiences, tailored to your unique business needs.",secondTitle:"PikaAI",navDesc1:"Pika AI is a new and better search engine that harnesses AI technology and helps people find the most relevant and interesting information from across the web.",btn1:"uidesign",btn2:"productdesign",btn3:"experiencestrategy",btn4:"uxresearch",url1:video1,thirdTitle:"Accern.Rhea",navDesc2:"Founded by Accern, a front-runner in No-Code NLP, Rhea stands as a personalized AI Associate designed to streamline FinTech workflows.",btn10:"prototyping",btn20:"uxstrategy",btn30:"productdesign",btn40:"uiuxdesign",url2:video2},

        {title:"Fintech",desc:"For fintech,we'll craft secure,user-friendly platform that enhance financial operations,improve data management,and driven user engagement",secondTitle:"VesselFinance",navDesc1:"A Vessel Finance Calculator is a B2B maritime solution for major shipping companies. It helps to assess the accounting impact of various vessel acquisitions.",btn1:"styleguide",btn2:"artdirection",btn3:"visuallanguage",btn4:"experiencestrategy",url1:video3,thirdTitle:"Tratta",navDesc2:"A B2B digital debt collection platform designed for collectors and organizations involved in payment management. It also provides solutions for individuals seeking to settle their debts.",btn10:"Datavisualization",btn20:"uxstrategy",btn30:"uiuxdesign",btn40:"styleguide",url2:video4},
        
        {title:"Web3",desc:"For Web3, we'll design user-friendly, decentralized applications that simplify complex interactions, making blockchain technology accessible and intuitive for non-technical users.",secondTitle:"CollectorCrypt",navDesc1:"A revolutionary startup bringing the $402 billion market for physical collectibles into the Web3 space. Collector is place to discover, gather, sell and even collateralize assets for loans.",btn1:"Uxstrategy",btn2:"styleguide",btn3:"artdirection",btn4:"uiuxdesign",url1:video5,thirdTitle:"Blockbeat",navDesc2:"AI-powered crypto trading terminal that provides traders with continuously updated, streamlined, and distilled data throughout the day.",btn10:"webdevelopment",btn20:"motiondesign",btn30:"uiuxdesign",btn40:"artdirection",url2:video6},
    ]

    const caseStudyHandler1 = ()=>{
        document.querySelector(".videoContainer1").addEventListener("mousemove",function(e){
            gsap.to(".caseStudy1",{
                x:e.x-500,
                y:e.y-100
            })
        })
    }
    const caseStudyHandler2 = ()=>{
        document.querySelector(".videoContainer2").addEventListener("mousemove",function(e){
            gsap.to(".caseStudy2",{
                x:e.x-500,
                y:e.y-100
            })
        })
    }

    let isHovered = false;
    const videoHandler1 = ()=>{
        const video = document.querySelector(".firstVideo");
        const videoContainer = document.querySelector(".videoContainer1");
        
        videoContainer.addEventListener("mouseover", () => {
          if (!isHovered) {
            video.play();
            isHovered = true;
        }
    });
    
    videoContainer.addEventListener("mouseout", () => {
        if (isHovered) {
            video.pause();
            isHovered = false;
            console.log("Leaved")
          }
        });
    }
    const videoHandler2 = ()=>{
        const video = document.querySelector(".secondVideo");
        const videoContainer = document.querySelector(".videoContainer2");
        
        videoContainer.addEventListener("mouseover", () => {
          if (!isHovered) {
            video.play();
            isHovered = true;
        }
    });
    
    videoContainer.addEventListener("mouseout", () => {
        if (isHovered) {
            video.pause();
            isHovered = false;
          }
        });
    }



    useEffect(()=>{
        caseStudyHandler1();
        caseStudyHandler2();

        videoHandler1();
        videoHandler2();
    },[])

    return (
        <div className="bg-zinc-950 flex flex-col gap-10 w-full min-h-[100vw] ">
           {portfolioData.map((item,index)=>{
            return <div key={index} className="w-[87vw] mx-auto h-[80%]  flex flex-col items-start justify-start">
            <div className="Main_container relative w-[87vw] h-full mx-auto flex">
                 <div className="Nav sticky top-0 bottom-0 w-[40%] h-full mr-[2vw] border-t-[.1vw]">
                     <h1 className="text-[3.5vw]">{item.title}</h1>
                     <div className="text-[1.2vw] w-[70%]">{item.desc}</div>
                     <div className="flex w-[70%] mt-[2vw] px-[3vw] rounded-full items-center justify-center py-[1vw]  bg-blue-600 gap-2">
                         <div className="uppercase font-medium text-[.9vw]">seeallcasestudies</div>
                         <MdArrowOutward className="text-[1.5vw]"/>
                     </div>
                 </div>
                 <div className="nav_right_wrapper w-full h-full flex flex-col gap-[5vw] items-start justify-start overflow-y-auto overflow-x-hidden border-t-[.1vw]">
                     <div className="navRight flex flex-col w-full h-[30%] gap-10">
                         <div className="top flex items-center justify-between">
                             <h1 className="text-[2vw]">{item.secondTitle}</h1>
                             <div className="top_right w-[70%]">
                                 <div className="top_right_top flex items-center gap-2">
                                     <div className="para text-[.9vw]">
                                     {item.navDesc1}
                                     </div>
                                     <MdArrowOutward className="text-[4vw]"/>
                                 </div>
                                 <div className="flex items-center">
                                     <Portfolio_btn title={item.btn1}/>
                                     <Portfolio_btn title={item.btn2}/>
                                     <Portfolio_btn title={item.btn3}/>
                                     <Portfolio_btn title={item.btn4}/>
                                 </div>
                             </div>
                         </div>
                         <div className="videoContainer1 relative w-full h-[35vw] rounded-xl overflow-hidden">
                             <video className="firstVideo w-full h-full object-cover" src={item.url1} loop muted autoPlay></video>
                             <div className="caseStudy1 absolute w-[10vw] h-[10vw] rounded-full flex items-center justify-center bg-blue-600 top-0">
                                <div className="text-[.8vw] font-semibold uppercase relative top-[1.5vw]">view case study</div>
                                <MdArrowOutward className="text-[1vw] relative top-[-2vw]"/>
                             </div>
                         </div>   
                     </div>
                     {/* Second Video */}
                     <div className="navRight flex flex-col w-full h-[30%] gap-10">
                         <div className="top flex items-center justify-between">
                             <h1 className="text-[2vw]">{item.thirdTitle}</h1>
                             <div className="top_right w-[70%]">
                                 <div className="top_right_top flex items-center gap-2">
                                     <div className="para text-[.9vw]">
                                     {item.navDesc2}
                                     </div>
                                     <MdArrowOutward className="text-[4vw]"/>
                                 </div>
                                 <div className="flex items-center">
                                     <Portfolio_btn title={item.btn10}/>
                                     <Portfolio_btn title={item.btn20}/>
                                     <Portfolio_btn title={item.btn30}/>
                                     <Portfolio_btn title={item.btn40}/>
                                 </div>
                             </div>
                         </div>
                         <div className="videoContainer2 relative w-full h-[35vw] rounded-xl bg-green-500 overflow-hidden">
                             <video className="secondVideo h-full w-full object-cover" src={item.url2} loop muted autoPlay></video>
                             <div className="caseStudy2 absolute w-[10vw] h-[10vw] rounded-full flex items-center justify-center bg-blue-600 top-0">
                                <div className="text-[.8vw] font-semibold uppercase relative top-[1.5vw]">view case study</div>
                                <MdArrowOutward className="text-[1vw] relative top-[-2vw]"/>
                             </div>
                         </div>   
                     </div>
                 </div>
             </div>
            </div>
           })}
        </div>
    )
}

export default Portfolio;
