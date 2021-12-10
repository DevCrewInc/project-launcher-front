import {gql} from '@apollo/client';

const UsuarioInformacion = gql`
query Query($_id: String!) {
    UsuarioInfo(_id: $_id) {
      
      aboutMe
      celular
      nombre
      _id
      identificacion
      correo
      facultad
      semestre
      rol
    }
  }
`



export{UsuarioInformacion}