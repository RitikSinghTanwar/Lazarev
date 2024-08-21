import React from "react";

function About_Cards(){

        const data = [
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",desc:"We enhanced the UX for advanced Shopify analytics, helping Peel raise $5M and leading to its acquisition by Shopify."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",desc:"Streamlining Boeing's blueprint approval process,we optimized and simplified company-wide procedure."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",desc:"Supproting Blade's marketing activities in the US and Europe, we boosted their market presence and enganement."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9072_633c148ad1bb7f022754664e_626be03929598bb074de4cc1_Remind.webp",desc:"Designed and AI + News platform for content company founded by patric Bet-David."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8cf9_633c14897f94fe831be72dad_61957e2b14f8c6babe1e0a4c_doxel.svg",desc:"Improving UX on Corel Draw's landing pages, we enhanced user experience and engagement."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",desc:"Creating a new learning experience for Abu Dhabi University, we drove educational innovation and enganement."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",desc:"We enhanced the UX for advanced Shopify analytics, helping Peel raise $5M and leading to its acquisition by Shopify."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",desc:"We enhanced the UX for advanced Shopify analytics, helping Peel raise $5M and leading to its acquisition by Shopify."},
            {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9072_633c148ad1bb7f022754664e_626be03929598bb074de4cc1_Remind.webp",desc:"We uplifted Sophirora Banking'd website design system for scalability,enhancing their digital presence."},
        ]

    return(
        data.map((item,index)=>{
            return   <div key={index} className="hover:scale-105 transition-all ease-linear duration-200 mt-[2vw] p-5 h-[11vw] flex flex-col justify-between flex-shrink-0">
            <div className="logo">
                <img className="invert h-[2vw]" src={item.url} alt="" />
            </div>
            <div className="mt-[.5vw] para w-80 text-[1vw] text-zinc-400">{item.desc}</div>
        </div>
        })
    )
}

export default About_Cards;