import React, { useState } from 'react';

const Tap = (props) => {
    const {updateTap} = props;
    const tabs = [1,2,3];

    const handleClick = (e,tab) => {
        updateTap(tab);
    }


    return (


        <>
        {tabs.map((tab, i) => (
            <button key={i}
            onClick={(e)=>handleClick(e,tab)}
            
            > Tab {tab}</button>
        ))}

        </>
    )
}
export default Tap;
