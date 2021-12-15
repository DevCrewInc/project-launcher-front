import 'styles/globals.css';
import fotoman from 'fotoman.jpeg'
import { useQuery, useMutation } from '@apollo/client';
import {borrarUsuario} from '../graphql/mutations';
import { EditarEstadoUsuario } from 'graphql/admin/mutations';
import { useConsulta } from 'context/ConsultaContext';








const TablaUsuarioAdmin = ({propsTablasUsuarios,nombreQuery}) => {
    const{busqueda}=useConsulta();


    const{data} = useQuery(propsTablasUsuarios,{
        pollInterval:200
    });



    return (
        <div >
                <table className = "w-full table-fixed mt-6">
                        <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                            <tr>
                                <th className="text-left pl-6">Nombre Usuario</th>
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

        <tbody className = "texto-tablas tbody-border text-gray-400">  
                    <tr >
                        <td className="w-72 text-left pl-7">
                            <span className=" bg-white" type="button" >{usuario.nombre}</span>
                        </td>
                        <td className="p-2">
                            <img className="text-center mx-auto rounded-full w-12 " src={fotoman} alt="Profile"/>
                        </td>
                        <td className="text-center w-1/5">
                            <span className="bg-white" type="button" >{usuario.identificacion}</span>
                        </td>
                        <td className="text-center">
                            <span className=" bg-white" type="button" >{usuario.rol}</span>
                        </td>
                        <td className="text-center w-1/5">
                            <select required onChange={(e) => {editarEstadoUsuario({variables: {_id: usuario._id ,estado:e.target.value}})}} className="text-sm font-light bg-gray-100 rounded-lg h-7 pl-2" name="estado" defaultValue="">
                                <option disabled type="String" value="">{usuario.estado}</option>
                                {usuario.estado==="AUTORIZADO"?null:(
                                <>
                                    <option type="String">AUTORIZADO</option>
                                </>
                                )}
                                
                                <option type="String">NO_AUTORIZADO</option>
                            </select>
                        </td>
                        <td className = "flex justify-center align-middle items-center space-x-2">
                            <i onClick={() => {eliminarUsuario({variables: {_id: usuario._id} })}} className = "py-5 fas fa-trash text-gray-400 hover:text-red-400 cursor-pointer"/>
                    
                        </td>
                    </tr>
                </tbody>
        )
}

export default TablaUsuarioAdmin

