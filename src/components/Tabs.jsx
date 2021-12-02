import React from 'react'
import { Link } from 'react-router-dom'

const Tabs = ({tab1, tab2}) => {
    return (
        <>
            <div className="my-4 space-x-2 mt-8 cursor-pointer">
                <button className="tabs">{tab1}</button>
            </div>
        
        </>
    )
}

export default Tabs
