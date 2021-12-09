import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import PrivateComponent from './private/PrivateComponents';
import { EditarEstadoProyecto } from 'graphql/admin/mutations';
import ModalDetalleProyecto from './ModalDetalleProyecto';




const TablaProyectos = ({propsTablasProyectos, nombreQuery}) => {

    const{data,error,loading} = useQuery(propsTablasProyectos,{
        pollInterval:200
    });

    

    return (

        <div>  
            <div>
            <table className = "w-full table-fixed mt-7">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="w-60 text-left pl-6" >Nombre</th>
                        <th className="w-40" >Fecha Inicio</th>
                        <th className="w-30">Identificación</th>
                        <th >Nombre Líder</th>
                        <th className="w-30">Fase</th>
                        <th className="w-16">Aceptar</th>
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


   


    const[editarEstadoProyecto, {data:editarProyectoData, error:editarProyectoError, loading:editarProyectoLoading}]=useMutation(EditarEstadoProyecto);

    return(
        <tbody key={proyecto._id} className = "texto-tablas tbody-border ">  
        <tr key={proyecto._id}>
            <td className="text-left pl-4">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.nombre}</span>
            </td> 
            <td className="p-2 flex justify-center">
                <span className ="">{proyecto.fechaInicio}</span>
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
            <td className="text-center">
                {proyecto.estadoProyecto === "ACTIVO" ? <button onClick={()=>{editarEstadoProyecto({variables: {_id: proyecto._id, estadoProyecto:"INACTIVO", faseProyecto: proyecto.faseProyecto}})}} className = "status-button mx-1 my-1 px-2">{proyecto.estadoProyecto}</button > : (
                   <ModalDetalleProyecto proyecto={proyecto}/> 
                )}
            </td>

            <td className = "flex justify-center items-center space-x-2">
                {/* <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/> */}
                <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
                    {/* <i className = "fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/> */}
                    <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                </PrivateComponent>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaProyectos;
