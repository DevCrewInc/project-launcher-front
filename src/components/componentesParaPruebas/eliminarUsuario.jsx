import React from 'react'

const eliminarUsuario = () => {
    return (
        <div>
            <td className = "flex justify-center align-middle items-center space-x-2">
                {/* <ModalDetalleProyecto/> */}
                <i onClick={() => {eliminarUsuario({variables: {_id: usuario._id} })}} className = "py-5 fas fa-trash text-gray-400 hover:text-red-400 cursor-pointer"/>
                    
            </td>
        </div>
    )
}

export default eliminarUsuario
