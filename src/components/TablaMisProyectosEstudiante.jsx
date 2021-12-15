import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useConsulta } from 'context/ConsultaContext';


const TablaMisProyectosEstudiante = ({propsTablasProyectos}) => {

    const{data} = useQuery(propsTablasProyectos,{
        variables:{_id:JSON.parse(localStorage.getItem('userData'))._id},
        pollInterval:200
    });

    const{busqueda} = useConsulta();
    

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
                data.Usuario.inscripciones.filter(i=>i.proyecto.nombre.toLowerCase().includes(busqueda)).map((inscripcion) => {
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
        <tbody  key={inscripcion.proyecto._id} className = "tbody-border text-sm texto-tablas">  
        <tr key={inscripcion.proyecto._id}>
            <td className="w-72 text-left pl-5 ">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.proyecto.nombre}</span>
            </td> 
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.proyecto.lider.nombre}</span>
            </td>
            
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.proyecto.faseProyecto}</span>
            </td>
            <td className = "text-center ">
                {inscripcion.proyecto.estadoProyecto === "ACTIVO" ? <span className = "status-button mx-1 my-1 px-2">{inscripcion.proyecto.estadoProyecto}</span > : (
                    <span className = "inactivo-button px-2 my-1">{inscripcion.proyecto.estadoProyecto}</span> 
                )}
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{inscripcion.estado}</span>
            </td>

            <td className = "flex justify-center items-center space-x-2">
                {inscripcion.estado==="PENDIENTE"|| inscripcion.estado==="RECHAZADA"||inscripcion.proyecto.faseProyecto==="TERMINADO"||inscripcion.proyecto.estadoProyecto==="INACTIVO"?(<><i class="text-gray-400 far py-3 far fa-clock fa-lg"></i></>):(<>
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