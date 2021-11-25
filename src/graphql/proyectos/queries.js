import {gql} from '@apollo/client';

const getProyectoTabla =gql`
query Proyectos {
    Proyectos {
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


export {getProyectoTabla, getSolicitudesNuevosProyectos}