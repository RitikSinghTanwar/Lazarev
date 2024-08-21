import React from "react";

function Card_btm(){

    const cardData = [
        {number:"/01",price:"$500M+",desc:"in funding secured for out clients"},
        {number:"/02",price:"120+",desc:"Awards backing our excellence"}
      ]

    return (
        <div className="w-[87vw] h-[20vw] rounded-xl mt-2 flex justify-between gap-2">
             {cardData.map((item,index)=>{
                return <div key={index} className="hover:bg-zinc-800 hover:p-[1.5vw] transition-all ease-linear duration-200 Card bg-zinc-900 w-[49.5vw] h-full rounded-xl flex flex-col justify-between items-start p-[1vw]">
                <div className="Number text-[1vw]">{item.number}</div>
                <div className="btm_part flex flex-col">
                    <div className="text-[4vw] font-bold">{item.price}</div>
                    <div className="text text-[1.2vw] w-[60%] text-zinc-400">{item.desc}</div>
                </div>
            </div>
            })}
        </div>
    )
}

export default Card_btm;