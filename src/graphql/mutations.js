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

const EditarContra = gql`
mutation EditarContrasena($_id: String!, $contrasena: String!, $contrasenaNueva: String!) {
  editarContrasena(_id: $_id, contrasena: $contrasena, contrasenaNueva: $contrasenaNueva)
}
`


export {borrarUsuario,EditarUsuario,EditarContra}