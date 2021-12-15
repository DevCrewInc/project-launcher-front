import React from 'react'
import fotoman from 'fotoman.jpeg'
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom'
import {getDetalleProyecto} from 'graphql/lider/queries'
import {MutationEditarEstadoInscripcion} from 'graphql/lider/mutaciones'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ModalAvances from 'components/ModalAvances';



const DetalleProyecto = () => {
    const navigate = useNavigate();

    const {id} = useParams();
 
   
    const{data} = useQuery(getDetalleProyecto,{
        variables:{_id:id},
        pollInterval:200
    });

    const[tabs, setTabs]=useState(true)
    const[tabs1, setTabs1]=useState(true)
 

   

    return(
        <>
        {data?(

        <div>
        <div>
            <div className = "flex">
                <div className="w-2/3">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className = "font-bold text-2xl w-80">{data.Proyecto.nombre}</span>
                            <span className = "text-gray-300 text-lg ">{data.Proyecto._id}</span>
                        </div>
                        <div>
                            <div className = "flex space-x-4">
                                {data.Proyecto.estadoProyecto === "ACTIVO" ? <span className = "status-button mx-1 my-1 px-2">{data.Proyecto.estadoProyecto}</span > : (
                                  <span className = "inactivo-button px-2 my-1">{data.Proyecto.estadoProyecto}</span> 
                                )}
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
            <div>
                <div>
                    <p className = "text-sm text-justify mt-8">
                    {data.Proyecto.descripcionProyecto}
                    </p>
                    <div className="font-medium mt-10 mb-7 space-x-8 cursor-pointer">
                        {tabs1?(
                        <>
                            <button onClick={()=>{setTabs1(true)}} className="tabs-perfil-active">Objetivos generales</button>
                            <button onClick={()=>{setTabs1(false)}} className="tabs-perfil-disable">Objetivos específicos</button>

                        </>):(<>
                            <button onClick={()=>{setTabs1(true)}} className="tabs-perfil-disable">Objetivos generales</button>
                            <button onClick={()=>{setTabs1(false)}} className=" tabs-perfil-active">Objetivos específicos</button>

                        </>)}
                    </div>
                    <div>
                    

                    {tabs1?(<>
                            {data.Proyecto.objetivos.map((objetivo)=>{
                                if(objetivo.tipo==="GENERAL"){

                                    return(
                                    <p className = "mt-3 text-sm">{objetivo.descripcion}</p>
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
        <div className=" pl-16">
                <div className ="flex w-80 justify-end">
                    <button onClick={() => navigate(-1)} className="rounded-full cursor-pointer bg-gray-500 hover:bg-gray-400 h-10 px-4 text-white" type="submit" value="Enviar datos">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
            <div className = "flex flex-col">
                    <div className = "flex justify-between mt-10 text-lg">
                        {tabs?(
                        <>
                            <button onClick={()=>{setTabs(true)}}>Tripulantes</button>
                            <div className="flex">
                                <button onClick={()=>{setTabs(false)}} className="text-gray-400 hover:text-blue-700 ">Solicitudes</button>
                                {data.Proyecto.inscripciones.filter(p => p.estado === "PENDIENTE").length === 0 ? null:
                                <div className="h-6 w-6 rounded-full bg-blue-700 text-white text-center text-xs p-1 mb-6 ml-1">{data.Proyecto.inscripciones.filter(p => p.estado === "PENDIENTE").length}</div>
                                }
                                
                            </div>

                        </>):(<>
                            <button onClick={()=>{setTabs(true)}} className="text-gray-400">Tripulantes</button>
                            <div className="flex">
                                <button onClick={()=>{setTabs(false)}} className="text-blue-700">Solicitudes</button>
                                {data.Proyecto.inscripciones.filter(p => p.estado === "PENDIENTE").length === 0 ? null:
                                <div className="h-6 w-6 rounded-full bg-blue-700 text-white text-center text-xs p-1 mb-6 ml-1">{data.Proyecto.inscripciones.filter(p => p.estado === "PENDIENTE").length}</div>
                                }
                            </div>
                        </>)}

                    </div>

                    {/* TRIPULANTES */}

                 {tabs? (
                    <>
                    <div className="mt-4 overflow-y-auto h-52">
                        
                     {data.Proyecto.inscripciones.map((inscripcion)=>{
                         if(inscripcion.estado === "ACEPTADA"){
                            return(

                                <SolicitudesInscripciones inscripcion={inscripcion} botones={false}/>
                             )
                         }return null
                        
                    })}
                    </div>
                    </>
                   

                 ):(
                    
                    <>
                    {  data.Proyecto.inscripciones.map((inscripcion)=>{
                        if(inscripcion.estado === "PENDIENTE"){
                           return(

                               <SolicitudesInscripciones inscripcion={inscripcion} botones={true} />
                            )
                        }return null
                       
                   })}
                   </>
                 )
                 }
                    
                    </div>
                </div>
            </div>
            <div className = "flex flex-col">
                    <div className="font-medium mt-12">
                        <span className="font-medium text-lg">Avances</span>
                    </div>
                    <div className="mt-6">
                        <table class="table-auto w-full text-center">
                            <thead className="text-gray-700">
                                <tr className="thead-color text-sm leading-10">
                                    <th className="w-1/3 text-left pl-4">Título Avance</th>
                                    <th class="w-1/5">Fecha</th>
                                    <th class="w-1/5">Responsable</th>
                                    <th class="w-1/5">Revisión</th>
                                    {data.Proyecto.faseProyecto === "TERMINADO"? (<></>):(<th class="w-1/5 pr-4">Acciones</th>)} 
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


export default DetalleProyecto;
 

const SolicitudesInscripciones =({inscripcion, botones})=>{

    const[editarEstadoInscripcion]=useMutation( MutationEditarEstadoInscripcion);
   
    
     return(
         <>
            <div>
                <div>
                    <div className = "cursor-pointer border-tripulantes flex items-center py-3 ">
                        <img src={fotoman} alt="Profile" className = "rounded-full w-12 mr-4"/>
                
                        <div className = "flex flex-col ">
                            <span className = "font-semibold text-sm">{inscripcion.estudiante.nombre}</span>
                            <span className = "font-light text-xs">{inscripcion.estudiante.identificacion}</span>
            
                        {botones?(
            
                            <div className="flex space-x-5 mt-4">
                                <button onClick={()=>{editarEstadoInscripcion({variables: {_id: inscripcion._id, estado: "RECHAZADA"}})}} className="px-4 h-7 outlined-button-perfil">RECHAZAR</button>
                                <button onClick={()=>{editarEstadoInscripcion({variables: {_id: inscripcion._id, estado: "ACEPTADA"}})}}className="px-4 h-7 filled-button-perfil">ACEPTAR</button>
                            </div>
            
            
                            ):( null)
                            }
                        </div>
                    </div>

                </div>
              
            </div>  
                
        </>
        )
}

const TablaAvances=({avance})=>{

    const {id} = useParams();
    const{data} = useQuery(getDetalleProyecto,{
        variables:{_id:id},
        pollInterval:200
    });
    
    return(
        <>
            <tbody>
                <tr className="text-center leading-10 texto-tablas">
                    <td className="text-left pl-4">{avance.tituloAvance}</td>
                    <td>{avance.fecha}</td>
                    <td>{avance.creadoPor.nombre}</td>
                    <td><i class="far fa-check-circle"></i></td>
                    <td class="flex pr-4 justify-center">
                    {data.Proyecto.faseProyecto === "TERMINADO"? (<></>):(
                    <>
                        <ModalAvances avance={avance}/>
                    </>)}
                        
                    </td>
                </tr>

            </tbody>
        </>
    )
}