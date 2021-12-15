import { useQuery } from '@apollo/client';
import React from 'react';
import PrivateComponent from './private/PrivateComponents';
import { Link } from 'react-router-dom';
import ModalEditarProyecto from './ModalEditarProyecto';
import { useConsulta } from 'context/ConsultaContext';



const TablaProyectosUser = ({propsTablasProyectos, nombreQuery}) => {

    const{busqueda}=useConsulta();

    const{data} = useQuery(propsTablasProyectos,{
        variables:{_id:JSON.parse(localStorage.getItem('userData'))._id},
        pollInterval:200
    });

    

    return (

        <div>  
            <div>
            <table className = "w-full table-auto mt-6">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="w-60 text-left pl-7">Nombre</th>
                        <th >Fecha Inicio</th>
                        <th >Tripulantes</th>
                        <th >Solicitudes</th>
                        <th >Fase</th>
                        <th >Estado</th>
                        <th >Acción</th>
                    </tr>
                </thead>
                {data &&
                data[nombreQuery].filter(p=>p.nombre.toLowerCase().includes(busqueda)).map((proyecto) => {
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

    return(
        <tbody  key={proyecto._id} className ="tbody-border text-sm text-gray-400 texto-tablas">  
        <tr key={proyecto._id}>
            <td className="w-72 text-left pl-5">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.nombre}</span>
            </td> 
            <td className="p-2 text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.fechaInicio}</span>
            </td>
            <td className="text-center">
            <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.inscripciones.filter(p => p.estado === "ACEPTADA").length}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.inscripciones.filter(p => p.estado === "PENDIENTE").length}</span>
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
                <Link to={`/page/lider/proyectos/detalle/${proyecto._id}`}>
                     <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/> 
                </Link>
            
                <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
                    {proyecto.estadoProyecto==="INACTIVO"?(
                    <>

                        <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                        <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
                    </>):(
                    <>
                    
                    <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                    <ModalEditarProyecto proyecto={proyecto}/>
                    </>)}
                    
                    
                </PrivateComponent>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaProyectosUser;