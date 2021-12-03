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
            fechaFin
            descripcionProyecto
            presupuesto
            objetivos {
                descripcion
                tipo
            }
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
const MisProyectosInscritos = gql`
query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      inscripciones {
            proyecto {
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
    }
  }
`

export{getListaProyectosEstudiantes,getMisProyectos,MisProyectosInscritos}