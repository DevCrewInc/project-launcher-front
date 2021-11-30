import React, { useState} from 'react';
import 'styles/globals.css';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
// import ListaUsuarios from 'pages/ListaUsuarios';
import 'styles/globals.css';
import Dialogos from 'pages/Dialogos'
import Proyectos1 from 'pages/Proyectos1';
import Solicitudes from 'pages/rol/admin/Solicitudes';
// import ListaProyectos from 'pages/ListaProyectos';
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';

import Administracion from 'pages/rol/admin/Administracion';
import ListaEstudiantes from 'pages/rol/lider/ListaEstudiantes';

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
  const [userData, setUserData] = useState({});
  


  return (
    <ApolloProvider client = {client}>
        <UserContext.Provider value={{ userData, setUserData}}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/registro' element={<Registro/>} />
              <Route path='/' element={<PrivateLayout/>}>
                <Route path='page/dialogos' element={<Dialogos/>}/>
                {/* <Route path='page/proyectos' element={<ListaProyectos />}/> */}
                <Route path='page/lider/estudiantes' element={<ListaEstudiantes />} />
                <Route path='page/solicitudes' element={<Solicitudes />} />
                <Route path='page/administracion' element={<Administracion />} />
                <Route path='page/dialogos' element={<Dialogos/>}/>
                <Route path='page/proyectos1' element={<Proyectos1/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </ApolloProvider>
      

  );
}

export default App;
