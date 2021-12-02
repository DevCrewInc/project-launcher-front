
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
const getProyectos =gql`
  query ProyectosLider($_id: String!) {
    ProyectosLider(_id: $_id) {
        _id
        nombre
        fechaInicio
        lider{
            identificacion
            nombre
        }
        faseProyecto
        estadoProyecto 
    
    }
  }

`



export {getSolicitudesEstudiantes,getEstudiantes,getProyectos};