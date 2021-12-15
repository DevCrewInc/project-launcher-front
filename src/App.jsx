import React, { useState} from 'react';
import 'styles/globals.css';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConsultaContext } from 'context/ConsultaContext';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import ListaNuevosProyectos from 'pages/rol/admin/ListaNuevosProyectos'
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Administracion from 'pages/rol/admin/Administracion';
import ListaEstudiantes from 'pages/rol/lider/ListaEstudiantes';
import ListaUsuarios from 'pages/rol/admin/ListaUsuarios';
import ListaProyectosLider from 'pages/rol/lider/ListaProyectosLider';
import DetalleProyecto from 'pages/rol/lider/DetalleProyecto';
import ListaTodosProyectos from 'pages/rol/admin/ListaTodosProyectos';
import ListarProyectosEstudiantes from 'pages/rol/estudiantes/ListarProyectosEstudiantes';
import ListarMisProyectosEstudiante from 'pages/rol/estudiantes/ListarMisProyectosEstudiante';
import DetalleProyectoEstudiante from 'pages/rol/estudiantes/DetalleProyectoEstudiante';
import PrivateRoute from 'components/private/PrivateRoute';



// import PrivateRoute from 'components/PrivateRoute';
// const httpLink = createHttpLink({
//   uri: 'https://devcrewserver.herokuapp.com/graphql',
// http://localhost:5000/graphql
// });

const client = new ApolloClient({
  uri: 'https://devcrewserver.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [busqueda, setBusqueda] = useState("");
  
 


  return (
    <ApolloProvider client = {client}>
        <ConsultaContext.Provider value={{busqueda, setBusqueda}}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/registro' element={<Registro/>} />
                
              <Route path='/' element={<PrivateLayout/>}>
               {/* ADMINISTRADOR */}
                <Route path='page/administracion' element={<PrivateRoute roleList={['ADMINISTRADOR']}><Administracion />  </PrivateRoute>} />
                <Route path='page/usuarios' element={<PrivateRoute roleList={['ADMINISTRADOR']}><ListaUsuarios /></PrivateRoute>} />
                <Route path='page/proyectosAdmin' element={<PrivateRoute roleList={['ADMINISTRADOR']}><ListaTodosProyectos /></PrivateRoute>}/>
                <Route path='page/administracion/nuevosProyectos' element={<PrivateRoute roleList={['ADMINISTRADOR']}><ListaNuevosProyectos /></PrivateRoute>}/>

                {/* LÍDER */}
                <Route path='page/lider/estudiantes' element={<PrivateRoute roleList={['LIDER']}><ListaEstudiantes /></PrivateRoute>} />
                <Route path='page/lider/proyectos' element={<PrivateRoute roleList={['LIDER']}><ListaProyectosLider/></PrivateRoute>} />
                <Route path='page/lider/proyectos/detalle/:id' element={<PrivateRoute roleList={['LIDER']}><DetalleProyecto/></PrivateRoute>} />

                 {/* ESTUDIANTE */}
                <Route path='page/estudiantes/proyectos' element={<PrivateRoute roleList={['ESTUDIANTE']}><ListarProyectosEstudiantes /></PrivateRoute>} />
                <Route path='page/estudiantes/proyectos/misProyectos' element={<PrivateRoute roleList={['ESTUDIANTE']}><ListarMisProyectosEstudiante /></PrivateRoute>} />
                <Route path='page/estudiantes/proyectos/misProyectos/detalle/:id' element={<PrivateRoute roleList={['ESTUDIANTE']}><DetalleProyectoEstudiante/></PrivateRoute>} />
               
              </Route>
            </Routes>
          </BrowserRouter>
        </ConsultaContext.Provider>
    </ApolloProvider>
      

  );
}

export default App;
