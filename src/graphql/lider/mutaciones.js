import {gql} from '@apollo/client';


const CrearProyecto =gql`
mutation CrearProyecto($nombre: String!, $presupuesto: Float!, $lider: String!, $objetivos: [crearObjetivo]) {
  crearProyecto(nombre: $nombre, presupuesto: $presupuesto, lider: $lider, objetivos: $objetivos) {
    nombre
    presupuesto
  }
}
`

export {CrearProyecto}