import {gql} from '@apollo/client';


const CrearProyecto =gql`
mutation CrearProyecto($nombre: String!, $presupuesto: Float!, $lider: String!, $objetivos: [crearObjetivo], $descripcionProyecto: String!, 
   $fechaEstimada: String!, ) {
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, lider: $lider, objetivos: $objetivos,descripcionProyecto: $descripcionProyecto, 
     fechaEstimada: $fechaEstimada,) {
    nombre
    presupuesto
  }
}
`

const MutationEditarEstadoInscripcion =gql`
mutation  editarEstadoInscripcion($_id: ID!, $estado: Enum_EstadoInscripcion!) {
  editarEstadoInscripcion(_id: $_id, estado: $estado) {
    estado
    
  }
}
`



export {CrearProyecto, MutationEditarEstadoInscripcion}