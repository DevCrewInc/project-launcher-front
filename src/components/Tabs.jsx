import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabs = ({tabs}) => {
    return (
        <>
            <div className="my-4 space-x-2 mt-6 flex " > 
                {tabs.map((tab)=>{
                    return(
                        <NavLink className="nav_link tabs" to={tab.to}>
                            {tab.title} 
                        </NavLink>
                    )
                })}
            </div>
        
        </>
    )
}

export default Tabs
