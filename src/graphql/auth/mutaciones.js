import {gql} from '@apollo/client';

const REGISTRO = gql`
 mutation Registro(
    $nombre: String!,
    $identificacion: String!,
    $correo: String!,
    $rol: Enum_Rol!,
    $contrasena: String!) 
    {
  registro(
    nombre: $nombre, 
    identificacion: $identificacion, 
    correo: $correo,
    rol: $rol, 
    contrasena: $contrasena
    ){
      token
      error
    }
}
`;

export {REGISTRO};

