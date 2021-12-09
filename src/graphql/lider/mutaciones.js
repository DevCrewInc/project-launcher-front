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

const MutationEditarProyecto =gql`
mutation EditarProyectoLider($_id: String!, $nombre: String!, $presupuesto: Float!, $descripcionProyecto: String!) {
  editarProyectoLider(_id: $_id, nombre: $nombre, presupuesto: $presupuesto, descripcionProyecto: $descripcionProyecto) {
  _id  
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

const MutationCrearObservacion =gql`
mutation CrearObservacion($idAvance: String!, $observaciones: String!) {
  crearObservacion(IdAvance: $idAvance, observaciones: $observaciones) {
    observaciones
  }
}
`
const MutationEditarObjetivo =gql`
mutation EditarObjetivo($idProyecto: String!, $indexObjetivo: Int!, $campos: crearObjetivo!) {
  editarObjetivo(IdProyecto: $idProyecto, indexObjetivo: $indexObjetivo, campos: $campos) {
  _id  
  }
}
`

const MutationCrearObjetivo =gql`
mutation CrearObjetivo($idProyecto: String!, $campos: crearObjetivo!) {
  crearObjetivo(IdProyecto: $idProyecto, campos: $campos) {
  _id  
  }
}
`




export {CrearProyecto,  MutationEditarProyecto, MutationEditarEstadoInscripcion, MutationCrearObservacion,MutationEditarObjetivo,MutationCrearObjetivo}