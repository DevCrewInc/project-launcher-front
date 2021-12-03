import { useQuery } from '@apollo/client';
import {useEffect} from 'react';



const TablaMisProyectosEstudiante = ({propsTablasProyectos}) => {

    const{data,error,loading} = useQuery(propsTablasProyectos,{
        variables:{_id:JSON.parse(localStorage.getItem('userData'))._id},
        pollInterval:200
    });


    

    return (

        <div>  
            <div>
            <table className = "w-full table-auto mt-2">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="w-2" >Nombre</th>
                        <th >Fecha Inicio</th>
                        <th >Identificación</th>
                        <th >Nombre Líder</th>
                        <th >Fase</th>
                        <th >Estado</th>
                        <th >Acción</th>
                    </tr>
                </thead>
                {data &&
                data.Usuario.inscripciones.map((inscripcion) => {
                    return(
                        <>
                            <FilasTablaProyectos key={inscripcion._id}  proyecto={inscripcion.proyecto}/>
                        </>
                    )
                })}
                
            </table>
        </div>
    </div>
    )
}

const FilasTablaProyectos = ({proyecto}) =>{


   


    

    return(
        <tbody  key={proyecto._id} className = "tbody-border text-sm text-gray-400">  
        <tr key={proyecto._id}>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.nombre}</span>
            </td> 
            <td className="p-2 flex justify-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.fechaInicio}</span>
            </td>
            <td className="text-center">
            <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.lider.identificacion}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.lider.nombre}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.faseProyecto}</span>
            </td>
            <td className = "text-center">
                {proyecto.estadoProyecto === "ACTIVO" ? <span className = "status-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</span > : (
                    <span className = "inactivo-button px-2 my-1">{proyecto.estadoProyecto}</span> 
                )}
            </td>

            <td className = "flex justify-center items-center space-x-2">
                <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaMisProyectosEstudiante;