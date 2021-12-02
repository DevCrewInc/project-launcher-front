import React, { useState} from 'react';
import 'styles/globals.css';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConsultaContext } from 'context/ConsultaContext';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
// import ListaUsuarios from 'pages/ListaUsuarios';
import 'styles/globals.css';
import Dialogos from 'pages/Dialogos'
import Proyectos1 from 'pages/Proyectos1';
import ListaNuevosProyectos from 'pages/rol/admin/ListaNuevosProyectos'
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Administracion from 'pages/rol/admin/Administracion';
import ListaEstudiantes from 'pages/rol/lider/ListaEstudiantes';
import ListaUsuarios from 'pages/rol/admin/ListaUsuarios';
import ListaProyectosLider from 'pages/rol/lider/ListaProyectosLider';

// import PrivateRoute from 'components/PrivateRoute';
// const httpLink = createHttpLink({
//   uri: 'https://devcrewserver.herokuapp.com/graphql',
// http://localhost:5000/graphql
// });

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [consulta, setConsulta] = useState(true);
  
  


  return (
    <ApolloProvider client = {client}>
        <ConsultaContext.Provider value={{consulta, setConsulta}}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/registro' element={<Registro/>} />
              <Route path='/' element={<PrivateLayout/>}>
                <Route path='page/dialogos' element={<Dialogos/>}/>
                <Route path='page/administracion/nuevosProyectos' element={<ListaNuevosProyectos />}/>
                <Route path='page/lider/estudiantes' element={<ListaEstudiantes />} />
                <Route path='page/lider/proyectos' element={<ListaProyectosLider   />} />
                <Route path='page/administracion' element={<Administracion />} />
                <Route path='page/usuarios' element={<ListaUsuarios />} />
                <Route path='page/dialogos' element={<Dialogos/>}/>
                <Route path='page/proyectos1' element={<Proyectos1/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ConsultaContext.Provider>
    </ApolloProvider>
      

  );
}

export default App;
