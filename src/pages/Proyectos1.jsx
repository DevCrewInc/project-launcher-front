import React from 'react'
import fotoman from 'fotoman.jpeg'

const Proyectos1 = () => {
    return (
        <div className = "flex m-10">
            <div className = "">
                <div className = "flex justify-between mb-20">
                    <div className="flex flex-col">
                            <span className = "font-bold text-2xl">Nombre Proyecto</span>
                            <span className = "text-gray-300 text-lg leading-5">12345</span>
                    </div>
                    <div className = "flex items-start space-x-10">
                            <button className = "status-button my-1 px-4">Activo</button>
                            <button className = "btn-estado-proyecto px-4 my-1">desarrollo</button>
                    </div>
                </div>
               
                <div className = "">
                    <div className = "space-x-1">
                        <i className = "date-budget fas fa-calendar-alt"/>
                        <span className = "date-budget font-medium pr-8">Feb 01- Dic 12</span>
                        <i className = "date-budget fas fa-calculator"/>
                        <span className = "date-budget font-medium">$2.000.000</span>
                    </div>

                    <p className = "mt-7 text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum, commodi ullam repellendus, 
                        soluta labore eos placeat, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                        explicabo id, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                        explicabo id.
                    </p>
                    <div className = "my-10 text-justify">
                        <span className = "font-semibold text-xl mt-10">Objetivos generales y específicos</span>
                        <p className = "mt-7"> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum, commodi ullam repellendus, 
                            soluta labore eos placeat, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id,fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id.
                        </p>
                    </div>
                </div>
            </div>
                    <div className = "flex flex-col mt-36 pl-20 pr-10 w-full">
                        <div className = "font-semibold leading-3 text-lg">
                            <span>Tripulantes</span>
                        </div>
                        <div className = "border-tripulantes flex items-center mt-8 pb-4">
                            <img src={fotoman} className = "rounded-full w-12 mr-4"/>
                            <div className = "flex flex-col ">
                                <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                                <span className = "font-light text-xs">2345</span>
                            </div>
                        </div>
                        <div className = "border-tripulantes flex items-center py-4">
                            <img src={fotoman} className = "rounded-full w-12 mr-4"/>
                            <div className = "flex flex-col ">
                                <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                                <span className = "font-light text-xs">2345</span>
                            </div>
                        </div>
                        <div className = "border-tripulantes flex items-center py-4">
                            <img src={fotoman} className = "rounded-full w-12 mr-4"/>
                            <div className = "flex flex-col">
                                <span className = "font-semibold text-sm">Juan Camilo Pérez</span>
                                <span className = "font-light text-sm">2345</span>
                            </div>
                        </div>
                    </div>
               
        </div>
    )
}

export default Proyectos1
