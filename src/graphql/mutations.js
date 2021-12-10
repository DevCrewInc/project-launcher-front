import {gql} from '@apollo/client';



const borrarUsuario = gql`
mutation eliminarUsuario(
    $_id: String
    ) {
    eliminarUsuario(
        _id: $_id
    ){
    nombre
    }
}
`

const EditarUsuario = gql`
mutation EditarUsuario($_id: String!, $aboutMe: String, $celular: String) {
  editarUsuario(_id: $_id, aboutMe: $aboutMe, celular: $celular) {
    _id
  }
}
`

export {borrarUsuario,EditarUsuario}