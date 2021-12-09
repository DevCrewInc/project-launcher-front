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
    console.log("iddd", id)
   
    const{data,error,loading} = useQuery(getDetalleProyecto,{
        variables:{_id:id},
        pollInterval:200
    });

    const[tabs, setTabs]=useState(true)
    console.log("data", data)

    return(
        <>
        {data?(

        <div>
        <div>
            <div className = "flex justify-between">
                <div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className = "font-bold text-2xl">{data.Proyecto.nombre}</span>
                            <span className = "text-gray-300 text-lg ">{data.Proyecto._id}</span>
                        </div>
                        <div className = "flex items-start space-x-10 justify-between">
                            <button className = "status-button my-1 px-4">{data.Proyecto.estadoProyecto}</button>
                            <button className = "btn-estado-proyecto px-4 my-1">{data.Proyecto.faseProyecto}</button>
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
                    <div className="font-medium mt-12">
                        <span className=" text-lg">TABS Objetivos Generales</span>
                    </div>
                    <div>
                        <p className = "mt-6 text-sm"> 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum, commodi ullam repellendus, 
                            soluta labore eos placeat, fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id,fugiat nesciunt et rerum quis. Quam enim sint cupiditate iusto repellendus
                            explicabo id.
                        </p>
                    </div>
                </div> 
            </div>
        </div>
        <div className=" pl-16">
                <div className ="flex w-80 justify-between">
                    <progress className = "btn-estado-proyecto rounded-full my-1" id="file" value="32" max="100"> 100% </progress>
                    <button onClick={() => navigate(-1)} className="rounded-full cursor-pointer bg-gray-500 hover:bg-gray-400 h-10 px-4 text-white" type="submit" value="Enviar datos">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                </div>
            <div className = "flex flex-col">
                    <div className = "flex justify-between mt-10 text-lg">
                        <button onClick={()=>setTabs(true)}>Tripulantes</button>
                        <div className="flex">
                            <button onClick={()=>setTabs(false)} className="text-gray-400 hover:text-blue-700 hover:shado">Solicitudes</button>
                            <div className="h-6 w-6 rounded-full bg-blue-700 text-white text-center text-xs p-1 mb-6 ml-1">1</div>
                        </div>
                        

                    </div>
               
                    {/* TRIPULANTES */}

                 {tabs? (
                    <>
                    <div className="mt-4 overflow-y-auto h-52">
                        
                     {data.Proyecto.inscripciones.map((inscripcion)=>{
                         console.log("inscripcion", inscripcion)
                         if(inscripcion.estado === "ACEPTADA"){
                            return(

                                <SolicitudesInscripciones inscripcion={inscripcion} botones={false}/>
                             )
                         }
                        
                    })}
                    </div>
                    </>
                   

                 ):(
                    
                    <>
                    {  data.Proyecto.inscripciones.map((inscripcion)=>{
                        console.log("inscripcion", inscripcion)
                        if(inscripcion.estado === "PENDIENTE"){
                           return(

                               <SolicitudesInscripciones inscripcion={inscripcion} botones={true} />
                            )
                        }
                       
                   })}
                   </>
                 )
                 }
                    
                    {/* SOLICITUDES */}
                    {/* <div className="mt-8">
                    <div className = "border-tripulantes items-center py-4">
                        <div className="flex cursor-pointer">
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
                    </div> */}
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


export default DetalleProyecto;
 

const SolicitudesInscripciones =({inscripcion, botones})=>{

    const[editarEstadoInscripcion, {data:editarEstadoData,error:editarEstadoError,loading:editarEstadoLoading}]=useMutation( MutationEditarEstadoInscripcion);
    // console.log("inscrip", inscripcion)
    
     return(
         <>
            <div>
                <div>
                    <div className = "cursor-pointer border-tripulantes flex items-center py-3 ">
                        <img src={fotoman} className = "rounded-full w-12 mr-4"/>
                
                        <div className = "flex flex-col ">
                            <span className = "font-semibold text-sm">{inscripcion.estudiante.nombre}</span>
                            <span className = "font-light text-xs">{inscripcion.estudiante.identificacion}</span>
            
                        {botones?(
            
                            <div className="space-x-4 flex mt-4">
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
    console.log("avance", avance)
    return(
        <>
            <tbody>
                <tr className="text-center leading-10 texto-tablas">
                    <td className="text-left pl-4">{avance.tituloAvance}</td>
                    <td>{avance.fecha}</td>
                    <td>{avance.creadoPor.nombre}</td>
                    <td><i class="far fa-check-circle"></i></td>
                    <td class="flex pr-4">
                        <ModalAvances avance={avance}/>
                        <i className = "fas fa-pen my-1 p-1 py-2 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
                        <i className = "fas fa-trash my-1 pl-3 py-2 text-gray-400 hover:text-red-400 cursor-pointer"/>
                    </td>
                </tr>

            </tbody>
        </>
    )
}