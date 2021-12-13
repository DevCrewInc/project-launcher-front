import React from 'react';
import eliminarUsuario from project-launcher-front/src/components/componentesParaPruebas/eliminarUsuario.jsx

describe ('Probando botón eliminar usuario', () => {
    it('Usuario eliminado', ()=>{
        const usuarioEliminado = eliminarUsuario({variables: {_id: usuario._id}})
        expect (usuarioEliminado).toEqual({variables: {_id: usuario._id}})

    })
})