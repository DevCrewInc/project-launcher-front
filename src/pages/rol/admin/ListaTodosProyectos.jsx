import TablaProyectos from 'components/TablaProyectos'
import { getProyectosAdmin } from 'graphql/admin/queries'
import React from 'react'

const ListaTodosProyectos = () => {
    return (
        <>
             <TablaProyectos propsTablasProyectos={getProyectosAdmin} nombreQuery='ListaProyectosAdmin'/>
        </>
    )
}

export default ListaTodosProyectos
