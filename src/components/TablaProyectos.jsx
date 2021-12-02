import { useQuery } from '@apollo/client';
import React from 'react';
import PrivateComponent from './private/PrivateComponents';


const TablaProyectos = ({propsTablasProyectos, nombreQuery}) => {

    const{data,error,loading} = useQuery(propsTablasProyectos);

    

    return (

        <div>  
            <div>
            <table className = "w-full table-auto mt-2">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th>Id</th>
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
    return(
        <tbody  key={proyecto._id} className = "tbody-border text-sm text-gray-400">  
        <tr key={proyecto._id}>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto._id}</span>
            </td>
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
                {proyecto.estadoProyecto === "ACTIVO" ? <button className = "status-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</button> : (
                    <button className = "inactivo-button px-2 my-1">{proyecto.estadoProyecto}</button> 
                )}
            </td>

            <td className = "flex justify-center items-center space-x-2">
                <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/>
                <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
                    <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>
                    <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                </PrivateComponent>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaProyectos;
