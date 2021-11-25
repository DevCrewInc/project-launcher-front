
import {gql} from '@apollo/client';


const getUsuarios =gql`
query Usuarios {
    Usuarios {
      _id
      nombre
      apellido
      identificacion
      rol
      estado
    }
  }
`

const getSolicitudesUsuarios =gql`
query solicitudesUsuarios {
  SolicitudesNuevosUsuarios {
      _id
      nombre
      apellido
      identificacion
      rol
      estado
    }
  }
`

export {getUsuarios, getSolicitudesUsuarios};