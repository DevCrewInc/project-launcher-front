import React from 'react'
import fotoman from 'fotoman.jpeg'
import Tabs from 'components/Tabs'

const Proyectos1 = () => {
    return (
        <div>
            <div>
                <div className = "flex">
                    <div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className = "font-bold text-2xl">Nombre Proyecto</span>
                                <span className = "text-gray-300 text-lg ">12345</span>
                            </div>
                            <div className = "flex items-start space-x-10">
                                <button className = "status-button my-1 px-4">Activo</button>
                                <button className = "btn-estado-proyecto px-4 my-1">desarrollo</button>
                            </div>
                        </div>
                        <div className = "space-x-1 mt-8">
                            <i className = "date-budget fas fa-calendar-alt"/>
                                <span className = "date-budget font-medium pr-8">Feb 01- Dic 12</span>
                            <i className = "date-budget fas fa-calculator"/>
                                <span className = "date-budget font-medium">$2.000.000</span>
                        </div>
                <div className = "flex">
                    <div>
                        <p className = "text-justify mt-8">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum, commodi ullam repellendus, 
                            soluta labore eos placeat, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id.
                        </p>
                        <Tabs tab1="Objetivos Generales"/>
                        <div>
                            <p className = "mt-6"> 
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum, commodi ullam repellendus, 
                                soluta labore eos placeat, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                                explicabo id,fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                                explicabo id.
                            </p>
                        </div>
                        <div className="font-medium mt-12">
                            <span className=" text-lg">Avances</span>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="w-full pl-12">
                <div className = "flex items-start ">
                    <button className = "btn-estado-proyecto px-4 my-1">desarrollo</button>
                </div>
                <div className = "flex flex-col w-full">
                        <div className = "flex justify-between font-semibold mt-14 text-lg">
                            <button className="font-semibold">Tripulantes</button>
                            <div className="flex">
                                <button className="text-gray-400 font-semibold">Solicitudes</button>
                                <div className="h-6 w-6 rounded-full bg-blue-700 text-white text-center text-xs p-1 mb-3 ml-1">1</div>
                            </div>
                            

                        </div>
                    <div className="overflow-y-auto h-80 mt-10">
                        {/* TRIPULANTES */}
                        <div className = "border-tripulantes flex items-center pb-4">
                                <img src={fotoman} className = "rounded-full w-12 mr-4"/>
                                <div className = "flex flex-col ">
                                    <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                                    <span className = "font-light text-xs">2345</span>
                                </div>
                            </div>
                            
                        </div>
                        {/* SOLICITUDES */}
                        <div className="mt-8">
                            <div className = "border-tripulantes items-center py-4">
                                <div className="flex">
                                    <img src={fotoman} className = "rounded-full w-12 h-12 mr-4"/>
                                    <div className = "flex flex-col">
                                        <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                                        <span className = "font-light text-sm">Ingenieria </span>
                                            <div className="space-x-4 flex mt-4">
                                                <button className="px-4 h-7 outlined-button-perfil">RECHAZAR</button>
                                                <button className="px-4 h-7 filled-button-perfil">ACEPTAR</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos1
