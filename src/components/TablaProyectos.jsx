import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import PrivateComponent from './private/PrivateComponents';
import { EditarEstadoProyecto } from 'graphql/admin/mutations';
import { useConsulta } from 'context/ConsultaContext';




const TablaProyectos = ({propsTablasProyectos, nombreQuery}) => {

    const{busqueda}=useConsulta();

    const{data} = useQuery(propsTablasProyectos,{
        pollInterval:200
    });
  

    
    return (

        <div>  
            <div>
            <table className = "w-full table-fixed mt-6">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="w-80 text-left pl-6" >Nombre</th>
                        <th className="w-40" >Fecha Inicio</th>
                        <th className="w-30">Id Líder</th>
                        <th>Nombre Líder</th>
                        <th className="w-32 ">Fase</th>
                        <th className="w-24">Estado</th>
                        <th className="w-24">Acción</th>
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


   


    const[editarEstadoProyecto]=useMutation(EditarEstadoProyecto);

    return(
        <tbody key={proyecto._id} className = "texto-tablas tbody-border texto-tablas">  
        <tr key={proyecto._id}>
            <td className="text-left pl-4">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis pl-2">{proyecto.nombre}</span>
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
                {proyecto.faseProyecto==="DESARROLLO"?(
                <>
                        <select required onChange={(e) => {editarEstadoProyecto({variables: {_id: proyecto._id ,faseProyecto:e.target.value,estadoProyecto:proyecto.estadoProyecto}})}}  className="text-sm font-light bg-gray-100 rounded-lg h-7 pl-2" name="estado" defaultValue="">
                                <option disabled type="String" value="">{proyecto.faseProyecto}</option>
                                <option type="String">TERMINADO</option>
                        </select>
                </>):(
                <>
        
                    <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.faseProyecto}</span>
                
                </>)}
               
            </td>
                <td className = "text-center">
                    {proyecto.estadoProyecto === "ACTIVO" ? <button onClick={()=>{editarEstadoProyecto({variables: {_id: proyecto._id, estadoProyecto:"INACTIVO", faseProyecto: proyecto.faseProyecto}})}} className = "status-button my-1 px-4 ">{proyecto.estadoProyecto}</button > : (
                        <button onClick={()=>{editarEstadoProyecto({variables: {_id: proyecto._id, estadoProyecto:"ACTIVO", faseProyecto: proyecto.faseProyecto}})}} className = "inactivo-button px-2 my-1">{proyecto.estadoProyecto}</button> 
                    )}
                </td>
            

            <td className = "flex justify-center items-center space-x-2">
                <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
                    <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                </PrivateComponent>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaProyectos;


