
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
const getDetalleProyecto=gql`
query Proyecto($_id: String!) {
  Proyecto(_id: $_id) {
    nombre
    _id
    descripcionProyecto
    presupuesto
    fechaInicio
    estadoProyecto
    faseProyecto
    objetivos {
      descripcion
      tipo
    }
    inscripciones {
      _id
      estado
      estudiante {
        nombre
        identificacion

      }
    }
    avances {
      _id
      tituloAvance
      descripcion
      fecha
      observaciones
      creadoPor {
        nombre

      }
    }
  
  }
}
`



export {getSolicitudesEstudiantes,getEstudiantes,getProyectos, getDetalleProyecto};