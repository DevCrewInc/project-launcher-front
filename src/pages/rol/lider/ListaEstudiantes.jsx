import React from 'react'
import { getEstudiantes } from 'graphql/lider/queries'
import TablaUsuario from 'components/TablaUsuarios'

const ListaEstudiantes = () => {
    return (
        <>
           <TablaUsuario propsTablasUsuarios={getEstudiantes} nombreQuery="Estudiantes"/>
        </>
    )
}

export default ListaEstudiantes
