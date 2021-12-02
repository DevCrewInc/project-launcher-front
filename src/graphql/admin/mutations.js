import {gql} from '@apollo/client';

const EditarEstadoUsuario = gql`
mutation EditarEstadoUsuario($_id: String!, $estado: Enum_EstadoUsuario!) {
  editarEstadoUsuario(_id: $_id, estado: $estado) {
    estado
  }
}
`


const EditarEstadoProyecto = gql`
mutation EditarEstadoProyecto(
  $_id: String!, 
  $estadoProyecto: Enum_EstadoProyecto!, 
  $faseProyecto: Enum_FaseProyecto!
  ) {
  editarEstadoProyecto(
    _id: $_id, 
    estadoProyecto: $estadoProyecto, 
    faseProyecto: $faseProyecto
    ) 
    {
      estadoProyecto
    
  }
}
`


export{EditarEstadoUsuario, EditarEstadoProyecto}