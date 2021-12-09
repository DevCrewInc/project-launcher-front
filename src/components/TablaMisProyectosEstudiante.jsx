import { useQuery } from '@apollo/client';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';



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
                        <th className="w-72 text-left pl-7" >Nombre</th>
                        <th >Nombre Líder</th>
                        <th >Fase Proyecto</th>
                        <th >Estado Proyecto</th>
                        <th>Estado inscripcion</th>
                        <th >Acción</th>
                    </tr>
                </thead>
                {data &&
                data.Usuario.inscripciones.map((inscripcion) => {
                    return(
                        <>
                            <FilasTablaProyectos key={inscripcion._id}  inscripcion={inscripcion}/>
                        </>
                    )
                })}
                
            </table>
        </div>
    </div>
    )
}

const FilasTablaProyectos = ({inscripcion}) =>{


   


    

    return(
        <tbody  key={inscripcion.proyecto._id} className = "tbody-border text-sm text-gray-400">  
        <tr key={inscripcion.proyecto._id}>
            <td className="w-72 text-left pl-5">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.proyecto.nombre}</span>
            </td> 
            {/* <td className="p-2 flex justify-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.fechaInicio}</span>
            </td> */}
            {/* <td className="text-center">
            <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{proyecto.lider.identificacion}</span>
            </td> */}
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.proyecto.lider.nombre}</span>
            </td>
            
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.proyecto.faseProyecto}</span>
            </td>
            <td className = "text-center">
                {inscripcion.proyecto.estadoProyecto === "ACTIVO" ? <span className = "status-button mx-1 my-1 px-2">{inscripcion.proyecto.estadoProyecto}</span > : (
                    <span className = "inactivo-button px-2 my-1">{inscripcion.proyecto.estadoProyecto}</span> 
                )}
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.estado}</span>
            </td>

            <td className = "flex justify-center items-center space-x-2">
                {inscripcion.estado==="PENDIENTE"|| inscripcion.estado==="RECHAZADA"?(<><i class="far fa-clock"></i>    </>):(<>
                    <Link to={`/page/estudiantes/proyectos/misProyectos/detalle/${inscripcion.proyecto._id}`}>
                         <i className = "fas fa-eye m-1 p-1 text-gray-400 hover:text-blue-600 cursor-pointer"/> 
                    </Link>
                </>)}

            </td>
        </tr>
    </tbody>
    )
}

export default TablaMisProyectosEstudiante;