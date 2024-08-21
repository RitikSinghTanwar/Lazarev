import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Header(){

    const headerData = [
        {url:"https://images.unsplash.com/photo-1723622625231-9f470a7a1d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D",title:"AI innovation process in desing: designing use..."},
        {url:"https://images.unsplash.com/photo-1692134991575-e7458b78a4f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D",title:"The Gestalt principles of Design: How desing"},
        {url:"https://images.unsplash.com/photo-1723460041408-bca78976c6b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D",title:"Effective Desing Principles for Crypto W..."},
        {url:"https://images.unsplash.com/photo-1620421645421-1f08d7068ddb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D",title:"How to design an AI interface users will trust"},
    ]

    useGSAP(()=>{
        gsap.from(".header_card",{
            opacity:0,
            y:-100,
            delay:1.5,
            duration:1.5
        })
    })

    return(
        <div className="w-[87vw] flex gap-[.5vw] mx-auto py-[2vw] overflow-hidden">
          {headerData.map((item,index)=>{
            return <div key={index} className="header_card w-[20%] bg-zinc-800 flex items-center gap-2 rounded-full px-[.7vw] py-[.6vw] overflow-hidden">
            <div className="image hover:rotate-180 transition-all ease-linear duration-1000 w-[3vw] h-[3vw] rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={item.url} alt="" />
            </div>
            <div className="header_card_title text-start text-[.8vw] w-[70%] ">{item.title}</div>
        </div> 
          })}
          <div className="header_card w-[20%] border-[.1vw] border-zinc-600 flex items-center justify-center gap-[1vw] rounded-full px-[.7vw] py-[.6vw] overflow-hidden">
            <div className="uppercase font-medium text-[1.1vw]">    
               view all articles
            </div>
            <MdArrowOutward className="text-[1.5vw]"/>
        </div>
        </div>
    )
}

export default Header;