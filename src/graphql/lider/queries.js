
import {gql} from '@apollo/client';


const getSolicitudesEstudiantes =gql`
query SolicitudesNuevosEstudiantes {
  SolicitudesNuevosEstudiantes {
    _id
      nombre
      identificacion
      rol
      estado
  }
}
`
const getEstudiantes =gql`
query Estudiantes {
  Estudiantes {
    _id
    nombre
    identificacion
    rol
    estado
  }
}

`



export {getSolicitudesEstudiantes,getEstudiantes};