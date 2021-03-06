import { useQuery } from '@apollo/client';
import ModalDetalleProyecto from './ModalDetalleProyecto';
import { useConsulta } from 'context/ConsultaContext';



const TablaProyectosEstudiantes = ({propsTablasProyectos, nombreQuery}) => {

    const{busqueda}=useConsulta();

    
    const{data} = useQuery(propsTablasProyectos,{
         pollInterval:200
    });


    return (

        <div>  
            <div>
            <table className = "w-full table-auto mt-2">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="w-72 text-left pl-7" >Nombre</th>
                        <th >Fecha Inicio</th>
                        <th >Identificación</th>
                        <th >Nombre Líder</th>
                        <th >Fase</th>
                        <th >Estado</th>
                        <th >Incribirse</th>
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
        <>
        {proyecto.inscripciones.length===0?(
        <tbody key={proyecto._id} className = "texto-tablas tbody-border">  
        <tr key={proyecto._id}>
            <td className="text-left py-2 pl-5">
                <span className ="whitespace-nowrap w-14 px-2">{proyecto.nombre}</span>
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
            {proyecto.inscripciones.some(inscripcion=>inscripcion.estudiante._id.includes(JSON.parse(localStorage.getItem('userData'))._id))?
            null:(
               <tbody key={proyecto._id} className = "texto-tablas tbody-border">  
               <tr key={proyecto._id}>
               <td className="text-left py-2 pl-5">
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
               )}
            </>)}
        </>
    )
}


export default TablaProyectosEstudiantes;


