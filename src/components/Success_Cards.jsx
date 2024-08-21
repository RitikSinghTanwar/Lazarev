import React from "react";

function Success_Cards() {
  const data = [
    {
      price: "$500M",
      desc: "In funding secured owning to our designs",
      number: "/001",
    },
    {
      price: "+1 million",
      desc: "In funding secured owning to our designs",
      number: "/002",
    },
    {
      price: "1000000+",
      desc: "In funding secured owning to our designs",
      number: "/003",
    },
    {
      price: "25 million",
      desc: "In funding secured owning to our designs",
      number: "/004",
    },
    {
      price: "+300%",
      desc: "In funding secured owning to our designs",
      number: "/005",
    },
    {
      price: "+42%",
      desc: "In funding secured owning to our designs",
      number: "/006",
    },
  ];

  return (
    <div className="text-black w-full h-screen leading-none">
      <div className="w-[87vw] h-full mx-auto flex flex-wrap items-center justify-center gap-5">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative card overflow-hidden hover:scale-105 hover:bg-zinc-200 transition-all ease-linear duration-200 flex-shrink-0 flex-grow-1 rounded-xl w-96 h-[15vw] bg-zinc-100 p-[2vw] flex flex-col justify-between before:absolute before:w-0 hover:before:w-full before:h-full before:bg-red-100 before:opacity-40 before:top-0 before:left-0 before:transition-all before:ease-linear before:duration-300"
            >
              <div className="price text-[3vw] font-bold text-black">
                {item.price}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[1vw] text-zinc-500">{item.desc}</div>
                <div className="text-[1vw] text-zinc-500">{item.number}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Success_Cards;
