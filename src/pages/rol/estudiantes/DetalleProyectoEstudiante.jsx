import React from 'react'
import fotoman from 'fotoman.jpeg'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import {getDetalleProyecto} from 'graphql/lider/queries'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModalAvances from 'components/ModalAvances';
import ModalCrearAvance from 'components/ModalCrearAvance';
import ModalEditarAvance from 'components/ModalEditarAvance';



const DetalleProyectoEstudiante = () => {
    const navigate = useNavigate();

    const {id} = useParams();

   
    const{data,error,loading} = useQuery(getDetalleProyecto,{
        variables:{_id:id},
        pollInterval:200
    });

    const[tabs, setTabs]=useState(true)

    return(
        <>
        {data?(
                
        <div>
        <div>
        <div className = "flex">
                <div className="w-2/3">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className = "font-bold text-2xl">{data.Proyecto.nombre}</span>
                            <span className = "text-gray-300 text-lg ">{data.Proyecto._id}</span>
                        </div>
                        <div>
                            <div className = "flex space-x-4">
                                <button className = "status-button my-1 px-4">{data.Proyecto.estadoProyecto}</button>
                                <button className = "btn-estado-proyecto px-4 my-1">{data.Proyecto.faseProyecto}</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className = "space-x-1 mt-8">
                        <i className = "date-budget fas fa-calendar-alt"/>
                            <span className = "date-budget text-lg font-medium pr-8">{data.Proyecto.fechaInicio}</span>
                        <i className = "date-budget fas fa-calculator"/>
                            <span className = "date-budget font-medium">$ {data.Proyecto.presupuesto}</span>
                    </div>
            <div className = "flex">
                <div>
                    <p className = "text-sm text-justify mt-8">
                    {data.Proyecto.descripcionProyecto}
                    </p>
                    <div className="space-x-8 cursor-pointer w-100 font-medium mt-12 ">
                        <button onClick={()=>{setTabs(true)}} className="tabs-modal">Objetivos generales</button>
                        <button onClick={()=>{setTabs(false)}} className="tabs-modal">Objetivos específicos</button>
                     </div>
                    <div>
                        {tabs?(<>
                            {data.Proyecto.objetivos.map((objetivo)=>{
                                if(objetivo.tipo==="GENERAL"){

                                    return(
                                    <h1 className = "mt-3 text-sm">{objetivo.descripcion}</h1>
                                    )
                                }
                                return null

                            })}
          
                        </>):(
                        <>

                            {data.Proyecto.objetivos.map((objetivo)=>{
                                if(objetivo.tipo==="ESPECIFICO"){

                                    return(
                                    <h1 className = "mt-3 text-sm">{objetivo.descripcion}</h1>
                                    )
                                }
                                return null

                            })}
                        
                        </>)}
                    </div>
                </div> 
            </div>
        </div>
        <div className="pl-16">
                <div className ="flex w-80 justify-end">
                    {/* <progress className = "btn-estado-proyecto rounded-full my-1" id="file" value="32" max="100"> 100% </progress> */}
                      <button onClick={() => navigate(-1)} className="rounded-full cursor-pointer bg-gray-500 hover:bg-gray-400 h-10 px-4 text-white" type="submit" value="Enviar datos">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
            <div className = "flex flex-col">
                    <div className = "flex justify-between mt-10 text-lg">
                        <span >Tripulantes</span>
                    </div>
               
                    {/* TRIPULANTES */}
                    
                    <div className="mt-4 overflow-y-auto h-52">
                        
                     {data.Proyecto.inscripciones.map((inscripcion)=>{
                         
                            return(

                                <SolicitudesInscripciones inscripcion={inscripcion} botones={false}/>
                             )
                        
                    })}
                    </div>      
                    
                    </div>
                </div>
            </div>
            <div className = "flex flex-col">
                    <div className="font-medium mt-12 flex justify-between">
                        <span className="font-medium text-lg">Avances</span>
                      <ModalCrearAvance proyectoId={data.Proyecto._id}/>
                    </div>
                    <div className="mt-6">
                        <table class="table-auto w-full text-center">
                            <thead className="text-gray-700">
                                <tr className="thead-color text-sm leading-10">
                                    <th className="w-1/3 text-left pl-4">Título Avance</th>
                                    <th class="w-1/5">Fecha</th>
                                    <th class="w-1/5">Responsable</th>
                                    <th class="w-1/5 pr-4">Acciones</th>
                                </tr>
                            </thead>
                            {data.Proyecto.avances.map((avance)=>{
                                return(
                                <TablaAvances avance={avance}/>
                                )
                            })}
                        </table>
                    </div>
            </div>

        </div>
    </div>

        ):null}
    </>
    
    )
 
}


export default DetalleProyectoEstudiante;
 

const SolicitudesInscripciones =({inscripcion})=>{

    

    
     return(
         <>
            <div>
                <div>
                    <div className = "cursor-pointer border-tripulantes flex items-center py-3">
                        <img src={fotoman} className = "rounded-full w-12 mr-4"/>
                
                        <div className = "flex flex-col ">
                            <span className = "font-semibold text-sm">{inscripcion.estudiante.nombre}</span>
                            <span className = "font-light text-xs">{inscripcion.estudiante.identificacion}</span>
                        </div>
                    </div>

                </div>
              
            </div>  
                
        </>
        )
}

const TablaAvances=({avance})=>{
  
    return(
        <>
            <tbody>
                <tr className="text-center leading-10 texto-tablas">
                    <td className="text-left pl-4">{avance.tituloAvance}</td>
                    <td>{avance.fecha}</td>
                    <td>{avance.creadoPor.nombre}</td>
                    <td className="flex pr-4 justify-center">
                        <ModalAvances avance={avance}/>
                        <ModalEditarAvance avance={avance}/>
                        <i className = "fas fa-trash my-1 pl-1 py-2 text-gray-400 hover:text-red-400 cursor-pointer"/>
                    </td>
                </tr>
                               
            </tbody>
        </>
    )
}
