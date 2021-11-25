import {gql} from '@apollo/client';

const getProyectosAdmin =gql`
query Proyectos {
    ListaProyectosAdmin {
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
    }
}
`;

const getListaProyectosEstudiantes = gql`
    query ProyectosEstudiantes{
        ListaProyectosEstudiante{
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
            
        }
    }
`;


export {getProyectosAdmin, getSolicitudesNuevosProyectos, getListaProyectosEstudiantes}