import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import PrivateComponent from './private/PrivateComponents';
import { EditarEstadoProyecto } from 'graphql/admin/mutations';
import ModalDetalleProyecto from './ModalDetalleProyecto';
import { useConsulta } from 'context/ConsultaContext';



const TablaNuevosProyectos = ({propsTablasProyectos, nombreQuery}) => {
    const{busqueda}=useConsulta();

    const{data} = useQuery(propsTablasProyectos,{
        pollInterval:200
    });
  

    
    return (

        <div>  
            <div>
            <table className = "w-full table-auto mt-6">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="text-left w-2 pl-6" >Nombre</th>
                        <th >Fecha Inicio</th>
                        <th >Id Líder</th>
                        <th >Nombre Líder</th>
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


   


    const[editarEstadoProyecto]=useMutation(EditarEstadoProyecto);

    return(
        <tbody  key={proyecto._id} className = "texto-tablas tbody-border ">  
        <tr key={proyecto._id}>
            <td className="text-center ">
                <span className ="pl-6 overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.nombre}</span>
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
                <span className = "mx-1 my-1 px-2">{proyecto.estadoProyecto}</span>
                   
            </td>

            <td className = "flex justify-center items-center space-x-2">
                <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
                    <ModalDetalleProyecto proyecto={proyecto}/> 
                    <i className = "fas fa-trash my-1 p-1 text-gray-400 hover:text-red-400 cursor-pointer"/>
                    
                </PrivateComponent>
            </td>
        </tr>
    </tbody>
    )
}

export default TablaNuevosProyectos;
