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



const getMisProyectos = gql`
query ProyectosEstudiante($_id: String!) {
    ProyectosEstudiante(_id: $_id) {
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


export{getListaProyectosEstudiantes,getMisProyectos}