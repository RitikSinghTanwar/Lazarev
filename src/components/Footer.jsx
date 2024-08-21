import React from 'react';

function Footer(){

    return(
        <div className='w-[87vw] h-[30vw] mx-auto border-t-[.1vw] mt-16 pt-28 bg-zinc-950 flex items-start justify-between'>
            <div className='left flex items-start gap-10'>
                <div className='first'>
                    <h1 className='text-[.9vw] font-semibold text-zinc-500 mb-5 mt-5 uppercase'>Areas of expertise</h1>
                    {["AI & ML","FinTech","RealEstate","E-commerce","Web3"].map((item,index)=>{
                        return <div className='hover:text-zinc-500 cursor-pointer mb-2 text-[1vw] font-semibold' key={index}>{item}</div>
                    })}
                </div>
                <div className='second'>
                <h1 className='text-[.9vw] text-zinc-500 mb-5 mt-5 uppercase font-semibold'>UI Ux design</h1>
                    {["UX Audit","UI Design","UX Design","UX Research"].map((item,index)=>{
                        return <div className='hover:text-zinc-500 cursor-pointer mb-2 text-[1vw] font-semibold' key={index}>{item}</div>
                    })}
                </div>
                <div className='third'>
                <h1 className='text-[.9vw] text-zinc-500 mb-5 mt-5 uppercase font-semibold'>product design</h1>
                    {["SaaS","Web App","Mobile App","Website Design"].map((item,index)=>{
                        return <div className='hover:text-zinc-500 cursor-pointer mb-2 text-[1vw] font-semibold' key={index}>{item}</div>
                    })}
                </div>
            </div>
            <div className='right w-[40%] flex relative flex-col items-start justify-center'>
                <div className='uppercase text-[1vw]'>Our location</div>
                <div className='text-[2.5vw]'>630 Mason St. San Francisco,CA 94108</div>
            </div>
        </div>
    )
}

export default Footer;