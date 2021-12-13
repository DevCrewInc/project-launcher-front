import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabs = ({tabs}) => {
    return (
        <>

            <div className="my-4 space-x-2 mt-6 flex " > 
                {tabs.map((tab)=>{

                    return(
                        <NavLink to={tab.to}>
                            <button className="tabs">{tab.title}</button> 
                        </NavLink>
                    )

                })}
              
            </div>
        
        </>
    )
}

export default Tabs
