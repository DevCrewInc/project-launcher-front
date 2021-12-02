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



export {CrearProyecto}