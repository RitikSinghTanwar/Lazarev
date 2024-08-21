import React from 'react';
import Card_top from "./Card_top";
import Card_btm from "./Card_btm";

function Cards(){

    return (
        <div className='w-[87vw] min-h-screen mx-auto mt-[10vw]'>
            <Card_top/>
            <Card_btm/>
        </div>
    )
}

export default Cards;