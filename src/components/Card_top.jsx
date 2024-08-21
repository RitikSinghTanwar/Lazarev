import React from "react";

function Card_top(){

    const cardData = [
        {number:"/01",price:"$500M+",desc:"in funding secured for out clients"},
        {number:"/02",price:"120+",desc:"Awards backing our excellence"},
        {number:"/03",price:"2015",desc:"Founded, based in San-Francisco"}
      ]

    return (
        <div className='main_container flex flex-wrap flex-shrink-0 justify-between relative'>
            {cardData.map((item,index)=>{
                return <div key={index} className="card hover:bg-violet-600 hover:p-[1.5vw] transition-all ease-linear duration-200 Card bg-zinc-900 w-[28.5vw] h-[25vw] rounded-xl flex flex-col justify-between items-start p-[1vw]">
                <div className="Number text-[1vw]">{item.number}</div>
                <div className="btm_part flex flex-col">
                    <div className="text-[4vw] font-bold">{item.price}</div>
                    <div className="text text-[1.2vw] w-[60%] text-zinc-400">{item.desc}</div>
                </div>
            </div>
            })}
            <div className="absolute left-[47%] top-[-25%]">
                <img className="h-[20vw]" src="src\assets\www_logo.webp" alt="" />
            </div>
        </div>
    )
}

export default Card_top;