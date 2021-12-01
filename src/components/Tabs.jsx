import React from 'react'
import {useState,useEffect} from 'react';

const Tabs = ({tab1, tab2}) => {
    const [changeTab, setChangeTab]= useState(true);
    return (
        <>
            <div className="my-4 space-x-2 mt-8 cursor-pointer">
                <button onClick={()=>{setChangeTab(true)}} className="tabs">{tab1}</button>
                <button onClick={()=>{setChangeTab(true)}} className="tabs">{tab2}</button>
            </div>
        
        </>
    )
}

export default Tabs
