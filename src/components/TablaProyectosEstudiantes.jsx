import { useQuery } from '@apollo/client';
import React, { useState,useEffect } from 'react';
import ModalDetalleProyecto from './ModalDetalleProyecto';



const TablaProyectosEstudiantes = ({propsTablasProyectos, nombreQuery}) => {

    

    const{data,error,loading} = useQuery(propsTablasProyectos,{
         pollInterval:200
    });

    console.log("dataaaaaa", data)
    

    return (

        <div>  
            <div>
            <table className = "w-full table-auto mt-2">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="w-2 pl-3" >Nombre</th>
                        <th >Fecha Inicio</th>
                        <th >Identificación</th>
                        <th >Nombre Líder</th>
                        <th >Fase</th>
                        <th >Estado</th>
                        <th >Incribirse</th>
                    </tr>
                </thead>
                {data &&
                data[nombreQuery].map((proyecto) => {
                        return(
                        <>
                            <FilasTablaProyectos key={proyecto._id}  proyecto={proyecto}/>
                        </>
                        )
                })}
                
            </table>
        </div>
    </div>
    )
}

const FilasTablaProyectos = ({proyecto}) =>{
    const [tamaño,setTamaño]=useState([])

    
    return(
        <>
        {proyecto.inscripciones.length===0?(
        <tbody key={proyecto._id} className = "texto-tablas tbody-border">  
        <tr key={proyecto._id}>
            <td className="text-center py-2">
                <span className =" whitespace-nowrap  w-14 px-2">{proyecto.nombre}</span>
            </td> 
            <td className="text-center">
                <span className =" whitespace-nowrap  w-14 px-2">{proyecto.fechaInicio}</span>
            </td>
            <td className="text-center">
            <span className =" whitespace-nowrap  w-14 px-2">{proyecto.lider.identificacion}</span>
            </td>
            <td className="text-center">
                <span className =" whitespace-nowrap  w-14 px-2">{proyecto.lider.nombre}</span>
            </td>
            <td className="text-center">
                <span className =" whitespace-nowrap  w-14 px-2">{proyecto.faseProyecto}</span>
            </td>
            <td className = "text-center">
                {proyecto.estadoProyecto === "ACTIVO" ? <span className = "status-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</span > : (
                    <span className = "inactivo-button px-2 my-1">{proyecto.estadoProyecto}</span> 
                )}
            </td>

            <td className = "flex justify-center items-center space-x-2">
                <ModalDetalleProyecto proyecto={proyecto}/> 
            </td>
        </tr>
    </tbody>
            ):(
            <>
            {proyecto.inscripciones.filter(inscripcion=>inscripcion.estudiante._id ===JSON.parse(localStorage.getItem('userData'))._id).length===0?(
            <>
                    <tbody key={proyecto._id} className = "texto-tablas tbody-border">  
                    <tr key={proyecto._id}>
                    <td className="text-center py-2">
                        <span className =" whitespace-nowrap  w-14 px-2">{proyecto.nombre}</span>
                    </td> 
                    <td className="text-center">
                        <span className =" whitespace-nowrap  w-14 px-2">{proyecto.fechaInicio}</span>
                    </td>
                    <td className="text-center">
                    <span className =" whitespace-nowrap  w-14 px-2">{proyecto.lider.identificacion}</span>
                    </td>
                    <td className="text-center">
                        <span className =" whitespace-nowrap  w-14 px-2">{proyecto.lider.nombre}</span>
                    </td>
                        <td className="text-center">
                        <span className =" whitespace-nowrap  w-14 px-2">{proyecto.faseProyecto}</span>
                    </td>
                    <td className = "text-center">
                        {proyecto.estadoProyecto === "ACTIVO" ? <span className = "status-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</span > : (
                            <span className = "inactivo-button px-2 my-1">{proyecto.estadoProyecto}</span> 
                        )}
                    </td>

                    <td className = "flex justify-center items-center space-x-2">
                        <ModalDetalleProyecto proyecto={proyecto}/> 
                    </td>
                    </tr>
                    </tbody>

            </>):null}
            </>)}
        </>
    )
}


export default TablaProyectosEstudiantes;