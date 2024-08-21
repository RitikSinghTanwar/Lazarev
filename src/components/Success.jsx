import React from "react";
import Success_Cards from "./Success_Cards";

function Success(){

    const data = [
        {title:"Partnership mentality",desc:"Along with taking the lead in designing AI-powered solutions, we embody a partnership mentality. This exact commitment has been the bedrock of our clients’ successes.  When you choose to collaborate with us, we promise to be right where your audience's changing desires meet your ambitious business goals. We don't settle for mediocrity; we strive for excellence in every Figma pixel, every touchpoint, and every UX interaction."},
        {title:"Results",desc:"That is how we've built 50+ sustainable startup products and helped 400+ brands secure millions in funding, achieve successful acquisitions, and establish themselves as globally recognized companies."}
    ]

    return (
        <div className="min-h-screen w-full bg-white text-black">
            <div className="w-[87vw] min-h-screen mx-auto text-black py-[10vw] flex items-start justify-start gap-[10vw]">
                <div className="left text-[3vw] font-bold leading-tight w-[30%]">
                    Success Stories Shaped by Our User Experience Design Agency
                </div>
                <div className="right flex flex-col gap-[5vw] w-[50%] items-center justify-center">
                   {data.map((item,index)=>{
                    return  <div key={index} className="flex flex-col gap-[1vw]">
                    <h1 className="text-zinc-500 text-[1.2vw] font-medium">{item.title}</h1>
                    <div className="text-[1.7vw]">{item.desc}</div>
                </div>
                   })}
                </div>
            </div>
            <Success_Cards/>
        </div>
    )
}

export default Success;