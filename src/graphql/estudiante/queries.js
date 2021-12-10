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
            inscripciones {
                estudiante {
                    _id
                }
            }
        }
    }
`;



const MisProyectosInscritos = gql`
query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      inscripciones {
            estado
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






export{getListaProyectosEstudiantes,MisProyectosInscritos}