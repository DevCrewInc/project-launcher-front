import {gql} from '@apollo/client';

const getProyectosAdmin =gql`
query Proyectos {
    ListaProyectosAdmin {
        _id
        nombre
        fechaInicio
        lider{
            identificacion
            nombre
        }
        faseProyecto
        estadoProyecto 
        fechaFin
        descripcionProyecto
    }
}
`;


const getSolicitudesNuevosProyectos = gql`
    query SolicitudesProyectos {
        SolicitudesNuevosProyectos {
            _id
            nombre
            fechaInicio
            fechaFin
            lider{
                identificacion
                nombre
            }
            faseProyecto
            estadoProyecto 
           
            fechaFin
            descripcionProyecto
            presupuesto
            
        }
    }
`;


const getUsuarios =gql`
query Usuarios {
    Usuarios {
      _id
      nombre
      identificacion
      rol
      estado
    }
  }
`

const getSolicitudesUsuarios =gql`
query solicitudesUsuarios {
  SolicitudesNuevosUsuarios {
      _id
      nombre
      identificacion
      rol
      estado
    }
  }
`


export {getProyectosAdmin, getSolicitudesNuevosProyectos,getSolicitudesUsuarios,getUsuarios}