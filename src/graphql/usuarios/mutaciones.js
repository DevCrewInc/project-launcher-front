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

`;

export {borrarUsuario}