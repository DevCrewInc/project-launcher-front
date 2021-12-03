import {gql} from '@apollo/client';


const mutacionCrearInscripcion = gql`
mutation Mutation($proyecto: String!, $estudiante: String!) {
    crearInscripcion(proyecto: $proyecto, estudiante: $estudiante) {
      _id
    }
  }
 ` 

 export {mutacionCrearInscripcion}