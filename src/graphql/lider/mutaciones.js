import {gql} from '@apollo/client';


const CrearProyecto =gql`
mutation CrearProyecto($nombre: String!, $presupuesto: Float!, $lider: String!, $objetivos: [crearObjetivo]) {
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, lider: $lider, objetivos: $objetivos) {
    nombre
    presupuesto
  }
}



# mutation CrearProyecto(
#   $nombre: String!,
#   $presupuesto: Float!, 
#   $descripcionProyecto: String!, 
#   $fechaEstimada: String!, 
#   $lider: String!
#   ) {
#   crearProyecto(
#     nombre: $nombre, 
#     presupuesto: $presupuesto, 
#     descripcionProyecto: $descripcionProyecto, 
#     fechaEstimada: $fechaEstimada, 
#     lider: $lider) 
#     {
#     nombre
#     presupuesto
#    }
# }
`

export {CrearProyecto}