import 'styles/globals.css';
import fotoman from 'fotoman.jpeg'
import { useQuery, useMutation } from '@apollo/client';
import {borrarUsuario} from '../graphql/mutations';
import { EditarEstadoUsuario } from 'graphql/admin/mutations';
import { useConsulta } from 'context/ConsultaContext';








const TablaUsuariosLider = ({propsTablasUsuarios,nombreQuery}) => {

    
    const{busqueda}=useConsulta();

    const{data} = useQuery(propsTablasUsuarios,{
        pollInterval:200
    });



    return (
        <div >
                <table className = "w-full table-auto mt-7">
                        <thead className = "thead-color leading-10 text-sm texto-tablas border-1 text-center">
                            <tr>
                                <th className="w-72 text-left pl-7">Nombre Usuario</th>
                                <th>Perfil</th>
                                <th>Documento</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead> 
                        {data && data[nombreQuery].filter(u=>u.nombre.toLowerCase().includes(busqueda)).map((usuario)=>{

                            return (
                                <FilasTablas usuario={usuario}/>    
                            )
                        
                        }) }
                    
                </table>
            </div>
            

    )
}

const FilasTablas = ({usuario})=>{

    const[eliminarUsuario]= useMutation(borrarUsuario);
    const[editarEstadoUsuario]=useMutation(EditarEstadoUsuario);

 

    return (

        <tbody className = " tbody-border text-sm text-gray-400">  
                    <tr >
                        <td className="w-72 text-left pl-7">
                            <span className="text-gray-600  bg-white" type="button" >{usuario.nombre}</span>
                        </td>
                        <td className="text-center p-2 w-14">
                            <img className="rounded-full w-" src={fotoman} alt="Profile"/>
                        </td>
                        <td className="text-center">
                            <span className="text-gray-600  bg-white" type="button" >{usuario.identificacion}</span>
                        </td>
                        <td className="text-center">    
                            <span className="text-gray-600  bg-white" type="button" >{usuario.rol}</span>
                        </td>
                        <td className = "text-center">
                            {usuario.estado === "PENDIENTE" ? <button onClick={()=>{editarEstadoUsuario({variables: {_id: usuario._id, estado:"AUTORIZADO"}})}} className = " inactivo-button mx-1 my-1 px-2">{usuario.estado}</button > : (
                                <span  className = " status-button px-2 my-1">{usuario.estado}</span> 
                            )}
                         </td>
                        <td className = "flex justify-center align-middle items-center space-x-2">
                          
                            <i onClick={() => {eliminarUsuario({variables: {_id: usuario._id} })}} className = "fas fa-trash my-1 p-4 text-gray-400 hover:text-red-400 cursor-pointer"/>
                    
                        </td>
                    </tr>
                </tbody>
        )
}

export default TablaUsuariosLider