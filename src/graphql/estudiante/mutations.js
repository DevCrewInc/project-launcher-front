import {gql} from '@apollo/client';


const mutacionCrearInscripcion = gql`
mutation Mutation($proyecto: String!, $estudiante: String!) {
    crearInscripcion(proyecto: $proyecto, estudiante: $estudiante) {
      _id
    }
  }
 ` 
const mutacionCrearAvance = gql`
mutation CrearAvance($tituloAvance: String!, $descripcion: String!, $proyecto: String!, $creadoPor: String!) {
  crearAvance(tituloAvance: $tituloAvance, descripcion: $descripcion, proyecto: $proyecto, creadoPor: $creadoPor) {
    fecha
  }
}
`
 

 export {mutacionCrearInscripcion,mutacionCrearAvance}