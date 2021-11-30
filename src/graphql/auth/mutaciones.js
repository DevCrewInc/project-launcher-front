import {gql} from '@apollo/client';

const REGISTRO = gql`
 mutation Registro(
    $nombre: String!,
    $identificacion: String!,
    $correo: String!,
    $rol: Enum_Rol!,
    $contrasena: String!,
    $facultad:Enum_Facultad
    $semestre:Enum_Semestre
    ) 
    
    {
  registro(
    nombre: $nombre, 
    identificacion: $identificacion, 
    correo: $correo,
    rol: $rol, 
    contrasena: $contrasena
    semestre:$semestre
    facultad:$facultad
    ){
      token
      error
    }
}
`;

const LOGIN = gql`
  mutation login(
    $correo: String!,
    $contrasena:String!,
    ){
    login(
      correo: $correo,
      contrasena: $contrasena
      ){
        token
        error
    }
}`;

export {REGISTRO,LOGIN};

