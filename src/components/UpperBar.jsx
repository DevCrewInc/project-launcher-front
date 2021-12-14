import React from 'react'
import { useConsulta } from 'context/ConsultaContext'

const UpperBar = ({icon , title}) => {
const {setBusqueda}= useConsulta();

    return (
        <>
            <div className="space-x-3 flex w-full self-center">
                <svg width="50" height="50" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon} fill="#252323" stroke="black" strokeWidth="0.4"/>
                </svg>

                <span className = "font-bold text-2xl w-full self-center">{title}</span>
                
                <div className ="wrapper-search w-full flex justify-end self-center">
                    <div className= "button-search bg-white border border-gray-500 rounded-full">
                        <div className= "flex">
                            <i className="icon-search fas fa-search text-gray-900 self-center"></i>
                            <input className= "outline-none w-64 h-10 rounded-full pl-3 hover:bg-gray-100" type="text" onChange={(e)=>{setBusqueda(e.target.value.toLowerCase())}}/>
                        </div>
                        
                    </div>
                </div>

                
                
            </div>

        </>
    )
}




export default UpperBar
