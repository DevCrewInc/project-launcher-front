import {gql} from '@apollo/client';

const EditarEstadoUsuario = gql`
mutation EditarEstadoUsuario($_id: String!, $estado: Enum_EstadoUsuario!) {
  editarEstadoUsuario(_id: $_id, estado: $estado) {
    estado
  }
}
`



export{EditarEstadoUsuario}