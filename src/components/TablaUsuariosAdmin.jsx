import 'styles/globals.css';
import { useEffect } from 'react';
import fotoman from 'fotoman.jpeg'
import { useQuery, useMutation } from '@apollo/client';
import {toast} from 'react-toastify';
import {borrarUsuario} from '../graphql/mutations';
import { EditarEstadoUsuario } from 'graphql/admin/mutations';








const TablaUsuarioAdmin = ({propsTablasUsuarios,nombreQuery}) => {

    const{data,error,loading} = useQuery(propsTablasUsuarios,{
        pollInterval:200
    });



    return (
        <div >
                <table className = "w-full table-fixed mt-5">
                        <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                            <tr>
                                <th className="text-left pl-4">Nombre Usuario</th>
                                <th>Perfil</th>
                                <th>Documento</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead> 
                        {data && data[nombreQuery].map((usuario)=>{

                            return (
                                <FilasTablas usuario={usuario}/>    
                            )
                        
                        }) }
                    
                </table>
            </div>
            

    )
}

const FilasTablas = ({usuario})=>{

    const[eliminarUsuario, {data: confirmacion, error: errorEliminacion, loading: loadingEliminacion}]= useMutation(borrarUsuario);
    const[editarEstadoUsuario, {data:userEdit,error:userError,loading:userLoading}]=useMutation(EditarEstadoUsuario);

 

    return (

        <tbody className = "texto-tablas tbody-border text-gray-400">  
                    <tr >
                        <td className="w-72 text-left pl-4">
                            <span className=" bg-white" type="button" >{usuario.nombre}</span>
                        </td>
                        <td className="p-2">
                            <img className="text-center mx-auto rounded-full w-12 " src={fotoman}/>
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
                            {/* <ModalDetalleProyecto/> */}
                            <i onClick={() => {eliminarUsuario({variables: {_id: usuario._id} })}} className = "py-5 fas fa-trash text-gray-400 hover:text-red-400 cursor-pointer"/>
                    
                        </td>
                    </tr>
                </tbody>
        )
}

export default TablaUsuarioAdmin


// <i className = "self fas fa-pen my-1 p-1 text-gray-400 hover:text-yellow-400 cursor-pointer"/>