import {gql} from '@apollo/client';

const getListaProyectosEstudiantes = gql`
    query ProyectosEstudiantes{
        ListaProyectosEstudiante{
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
`;

export{getListaProyectosEstudiantes}